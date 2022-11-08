import React from 'react';

const AllServiceCart = ({ services }) => {

    //     {/* The button to open modal */}
    // <label htmlFor="my-modal" className="btn">open modal</label>

    // {/* Put this part before </body> tag */}
    // <input type="checkbox" id="my-modal" className="modal-toggle" />
    // <div className="modal">
    //   <div className="modal-box">
    //     <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    //     <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    //     <div className="modal-action">
    //       <label htmlFor="my-modal" className="btn">Yay!</label>
    //     </div>
    //   </div>
    // </div>

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
                    <label htmlFor="my-modal-3" className="btn">Details</label>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <img src={img} alt="" />
                            <h3 className="text-lg font-bold">{title}</h3>
                            <p className="py-4">{description}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllServiceCart;