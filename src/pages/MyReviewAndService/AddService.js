import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AddService = () => {

    const {user} = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const ratting = form.ratting.value;

        const comment = {
            title,
            photo,
            description,
            price,
            ratting
        }

        fetch('http://localhost:5000/services', {
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
                    // alert('Ordered Confirm Successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))


    }

    return (
        // <div className="card w-full bg-base-100 shadow-xl">
        //         <figure><img src={img} alt="Shoes" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">
        //                 {title}
        //             </h2>
        //             {description}
        //             <div className="card-actions justify-between">
        //                 <div className="badge badge-outline text-red-400">Price: ${price}</div>
        //                 <div className="badge badge-outline text-red-400">Ratting: {ratting}</div>
        //             </div>
        //             <Link to='/allServices'><button className='btn btn-ghost bg-red-400'>Go Back</button></Link>
        //         </div>
        //     </div>



        <form onSubmit={handlePlaceOrder} className='my-8'>
            <h2 className="text-4xl my-2">Pleaze Add A Service:</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered w-full" required />
                <input name='title' type="text" placeholder="Title" className="input input-bordered w-full" required />
                <textarea name='description' className="textarea textarea-accent w-full my-3" placeholder="Description" required></textarea>
                <input name='price' type="text" placeholder="Price" className="input input-bordered w-full" required />
                <input name='ratting' type="text" placeholder="Ratting" className="input input-bordered w-full" required />
            </div>
            
            <input className='btn my-5 bg-orange-600' type="submit" value="Please Confirm" />
        </form>
    );
};

export default AddService;