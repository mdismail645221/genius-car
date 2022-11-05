import React, { useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import OrderRows from './OrderRows';

const Order = () => {
    const { user, logOut } = useContext(AuthContext)
    const [orders, setOrder] = useState([]);
    // const [displayOrder, setDisplayOrder] = useState(orders);
    // console.log(displayOrder)
    // console.log(orders)
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 401){
                    logOut()
                }
               return res.json()
            })
            .then(data => {
                // console.log(data)
                setOrder(data)
                // setDisplayOrder(data)
            })
    }, [user?.user])

    // console.log(orders)

    const handleDelete = (id) => {
        const agree = window.confirm(`are you confirm delete your ${id}`)
        if(agree){
            fetch(`http://localhost:5000/orders/${id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    toast.success('successfully deleted');
                    const remainingOrders = orders.filter(odr=> odr._id !== id);
                    setOrder(remainingOrders)
                }
            })
        }
    }


    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order=> <OrderRows
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                        ></OrderRows>)

                    }
                </tbody>

            </table>
        </div>
    );
};

export default Order;