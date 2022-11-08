import React from 'react';

const AllServiceCart = ({services}) => {

    const { title, img, price, ratting, description } = services;
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
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default AllServiceCart;