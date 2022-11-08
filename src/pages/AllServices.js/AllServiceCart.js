import React from 'react';

const AllServiceCart = ({ services }) => {

    const { title, img, price, ratting, description, service_id } = services;


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

                <label htmlFor={service_id} className="btn btn-ghost">Details</label>
                <input type="checkbox" id={service_id} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <img src={img} alt="" srcset="" />
                        <h3 className="font-bold text-lg">{title}</h3>
                        <p className="py-4">{description}</p>
                        <div className="modal-action">
                            <label htmlFor={service_id} className="btn">Close</label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllServiceCart;