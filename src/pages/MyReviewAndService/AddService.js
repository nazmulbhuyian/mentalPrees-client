import React from 'react';
import UseTitle from '../../Hooks/UseTitle';

const AddService = () => {


    UseTitle('Add-Service')

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

        fetch('https://mental-press-server.vercel.app/services', {
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
                    alert('Services added Successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))


    }

    return (



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