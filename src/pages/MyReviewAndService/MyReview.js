import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReview = () => {

    const {user} = useContext(AuthContext);

    const [orders, setOrders] = useState([])
    console.log(orders);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/comments?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setOrders(data)
                })
        }
    }, [user?.email])

    const handleDelete = id =>{
      const proceed = window.confirm('Are you sure want to cancle this order')
      if(proceed){
          fetch(`http://localhost:5000/comments/${id}`, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
              console.log(data);
          })
      }
  }

    return (
        <div>
        {
            orders?.map(item => <div className="card w-3/5 bg-base-100 shadow-xl my-10">
                
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
    </div>)
    }
        </div>
    );
};

export default MyReview;