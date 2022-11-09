import React from 'react';
import { Link } from 'react-router-dom';

const AllServiceCart = ({ services}) => {

    const { title, img, price, ratting, description, _id} = services;
    // console.log(services);


    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(1, 100)}</p>
                <div className='flex'>
                    <p className='text-2xl'>Price: {price}</p>
                    <p className='text-2xl'>Ratting: {ratting}</p>
                </div>

                <Link to={`/serviceDetails/${_id}`}><button className='btn btn-ghost bg-red-400 ml-24 my-5'>Details</button></Link>

            </div>
        </div>
    );
};

export default AllServiceCart;