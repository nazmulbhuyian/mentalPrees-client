import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCart = ({ services }) => {
    // console.log(services);
    const { title, img, price, ratting, description, _id } = services;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(1, 100)}</p>
                <div className='flex'>
                    <p>Price: {price}</p>
                    <p>Ratting: {ratting}</p>
                </div>
                <Link to={`/serviceDetails/${_id}`}><button className='btn btn-info w-full'>Details</button></Link>

            </div>
        </div>
    );
};

export default ServiceCart;