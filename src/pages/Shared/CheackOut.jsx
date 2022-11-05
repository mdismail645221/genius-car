import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const CheackOut = () => {
    const details = useLoaderData();
    const { user } = useContext(AuthContext);
    // console.log(details)
    const { title, _id, price, img } = details;


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const FullName = `${form.fastName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.msg.value;
        // console.log(FullName, phone, email, message)


        const order = {
            servicesId: _id,
            title,
            price,
            img,
            name: FullName,
            phone,
            email,
            message
        }

        console.log(order)


        // order api 
        fetch(`http://localhost:5000/orders`, {
            method: 'POST', 
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(data => {
            // console.log(data)
            toast.success('SuccessFully added')
            form.reset()
        })


    }



    return (
        <div className='w-4/5 mx-auto py-32'>
            <form onSubmit={handleSubmit}>
                <h4 className="text-5xl text-start">{title}</h4>
                <h3 className="text-4xl text-start pt-5">Price: {price}</h3>
                <div className='from-controls grid-cols-1 gap-10 md:grid grid-cols-2  mt-10'>
                    <input type="text" name='fastName' placeholder="Fast Name" className="mb-10 input input-bordered w-full"  required/>

                    <input type="text" name='lastName' placeholder="Last Name" className="mb-10 input input-bordered w-full" required />

                    <input type="text" name='phone' placeholder="Your Phone" className="mb-10 input input-bordered w-full"  required/>

                    <input defaultValue={user?.email} name='email' readOnly type="email" placeholder="Your Email" className="input input-bordered w-full" />
                </div>
                <div className='form-controls my-10'>
                    <textarea rows="7" cols="50" name='msg' className="textarea textarea-bordered w-full" placeholder="Your Message" required></textarea>
                </div>
                <div className='form-controls'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CheackOut;