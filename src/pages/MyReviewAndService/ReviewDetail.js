import React from 'react';

const ReviewDetail = ({ item, handleDelete, handleStatusUpdate }) => {
    return (
        <div className="card w-3/5 bg-base-100 shadow-xl my-10">

            <div className='flex'>
                <div>
                    <button onClick={() => handleDelete(item._id)} className='btn btn-ghost'>X</button>
                </div>
                <figure><img src={item?.photo} className="rounded w-24" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item?.customer}
                    </h2>
                    {item?.message}
                </div>
            </div>
            {/* <button onClick={() => handleStatusUpdate(item._id)} className='btn btn-ghost'>Edit</button> */}
            {/* The button to open modal */}
            <label htmlFor="my-modal" className="btn">Edit</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                <input name='update' type="text" placeholder="Update Review" className="input input-bordered w-full" required />
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn" >Done</label>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ReviewDetail;