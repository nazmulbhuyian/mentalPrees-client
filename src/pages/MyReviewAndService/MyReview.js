import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import UseTitle from '../../Hooks/UseTitle';
import ReviewDetail from './ReviewDetail';

const MyReview = () => {

    const { user } = useContext(AuthContext);

    const [orders, setOrders] = useState([])
    // console.log(orders);

    UseTitle('My-Review')

    useEffect(() => {
        if (user?.email) {
            fetch(`https://mental-press-server.vercel.app/comments?email=${user?.email}`, {
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

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to cancle this order')
        if (proceed) {
            fetch(`https://mental-press-server.vercel.app/comments/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }
    
    // const handleStatusUpdate = id => {
    //     fetch(`http://localhost:5000/comments/${id}`, {
    //         method: 'PATCH',
    //         Headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify()
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             // if (data.matchedCount > 0) {
    //             //     const remaining = orders.filter(odr => odr._id !== id)
    //             //     const approving = orders.find(odr => odr._id === id)
    //             //     approving.status = 'Approve'

    //             //     const newOrders = [approving, ...remaining];
    //             //     setOrders(newOrders);
    //             // }
    //             setOrders(data);
    //         })
    // }

    return (
        <div>
            {
                orders?.map(item =>
                     <ReviewDetail item={item} handleDelete={handleDelete}>

                     </ReviewDetail>)
            }
        </div>
    );
};

export default MyReview;