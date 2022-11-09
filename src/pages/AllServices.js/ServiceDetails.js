import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const { title, img, price, ratting, description } = useLoaderData();

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                    {description}   
                <p>{}</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">Price: ${price}</div>
                    <div className="badge badge-outline">Ratting: {ratting}</div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;