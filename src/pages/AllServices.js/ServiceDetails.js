import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const { title, img, price, ratting, description, review } = useLoaderData();
    console.log(review);

    return (
        <div>

            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    {description}
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">Price: ${price}</div>
                        <div className="badge badge-outline">Ratting: {ratting}</div>
                    </div>
                </div>
            </div>

            <h1 className='text-4xl'>Please Comment</h1>

            <h1 className='text-5xl'>People Also Said.</h1>

            {
                review.map(item => <div className="card w-3/5 bg-base-100 shadow-xl my-10">
                    <div className='flex'>
                        <figure><img src={item?.img} className="rounded" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item?.name}
                            </h2>
                            {item?.text}
                        </div>
                    </div>
                </div>)
            }



        </div>
    );
};

export default ServiceDetails;