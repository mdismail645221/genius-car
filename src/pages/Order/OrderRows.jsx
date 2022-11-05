import React, {useState, useEffect} from 'react';

const OrderRows = ({order, handleDelete}) => {
    // console.log(order)
    const {servicesId} = order;
    const [OrderServices, SetOrderServices] = useState([]);
    useEffect(()=> {
        fetch(`http://localhost:5000/services/${servicesId}`)
        .then(res=> res.json())
        .then(data=> {
            // console.log(data)
            SetOrderServices(data)
        })
    },[servicesId])

    console.log(OrderServices)










    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(order._id)} className="btn btn-circle bg-red-600">
                        {/* <span style={{fontSize: "10px"}}>Deleted</span> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill='none' viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                OrderServices?.img &&
                                <img src={OrderServices?.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        {/* <div className="font-bold">{order?.tittle}</div> */}
                        <div className="text-sm opacity-50">{order?.phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {order.message}
                <br />
                <span className="badge badge-ghost badge-sm">
                    Price: {order.price}
                </span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default OrderRows;