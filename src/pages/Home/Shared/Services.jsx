import React, { useEffect, useState } from 'react';
import ServicesCards from './ServicesCards';

const Services = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='w-4/5 mx-auto py-32'>
            <div className='w-1/2 mx-auto mb-16'>
                <p className='font-bold' style={{color: "#FF3811"}}>services</p>
                <h1 className="text-5xl font-bold">Our Services Area</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    products.map(pd=> <ServicesCards
                        key={pd._id}
                        pd={pd}
                    ></ServicesCards>)
                }
            </div>
        </div>
    );
};

export default Services;