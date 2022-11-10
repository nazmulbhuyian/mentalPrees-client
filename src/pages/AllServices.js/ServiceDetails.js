import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ServiceDetails = () => {

    const { title, img, price, ratting, description, _id, review } = useLoaderData();

    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch('https://mental-press-server.vercel.app/comments')
            .then(res => res.json())
            .then(data => {
                console.log(data.service);
                setReview(data)
            })
    }, [])

    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const message = form.message.value;
        const photo = form.photo.value;
        const email = user?.email || 'Unregister';

        const comment = {
            service: _id,
            customer: name,
            message,
            photo,
            email
        }

        fetch('https://mental-press-server.vercel.app/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Comment Confirm Successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))


    }

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
                        <div className="badge badge-outline text-red-400">Price: ${price}</div>
                        <div className="badge badge-outline text-red-400">Ratting: {ratting}</div>
                    </div>
                    <Link to='/allServices'><button className='btn btn-ghost bg-red-400'>Go Back</button></Link>
                </div>
            </div>

            <div>
                <form onSubmit={handlePlaceOrder} className='my-8'>
                    <h2 className="text-4xl my-2">You are Comment to: {title}</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name='name' type="text" placeholder="YourName" className="input input-bordered w-full" required />
                        <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered w-full" required />
                        <input name='email' type="email" placeholder="Your E-mail" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                    </div>
                    <textarea name='message' className="textarea textarea-accent w-full my-3" placeholder="Your Message" required></textarea>
                    <input className='btn mb-5 bg-orange-600' type="submit" value="Please Confirm" />
                </form>
            </div>

            <h1 className='text-5xl'>People Also Said.</h1>

            {
                review.map(item => <div className="card w-3/5 bg-base-100 shadow-xl my-10">
                    <div className='flex'>
                    <figure><img src={item?.photo} className="rounded" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item?.customer}
                            </h2>
                            {item?.message}
                        </div>
                    </div>
                </div>)
            }
            {
                reviews.map(item => <div className="card w-3/5 bg-base-100 shadow-xl my-10">
                    <div className='flex'>
                    <figure><img src={item?.photo} className="rounded" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item?.customer}
                            </h2>
                            {item?.message}
                        </div>
                    </div>
                </div>)
            }



        </div>
    );
};

export default ServiceDetails;