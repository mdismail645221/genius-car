import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCards = ({ pd, }) => {
    console.log(pd)
    const { img, description, _id} = pd;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={pd.img} alt="Shoes" /></figure>
            <div className="card-body text-left">
                <p>{pd?.title}</p>
                <div className="card-actions flex items-center justify-between">
                    <div>
                        <p>${pd?.price}</p>
                    </div>
                    <div>
                        <Link to={`/services/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCards;