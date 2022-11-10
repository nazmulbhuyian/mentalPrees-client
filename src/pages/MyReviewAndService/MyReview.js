import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import UseTitle from '../../Hooks/UseTitle';
import ReviewDetail from './ReviewDetail';

const MyReview = () => {

    const { user } = useContext(AuthContext);

    const [orders, setOrders] = useState([])

    UseTitle('My-Review')

    useEffect(() => {
        if (user?.email) {
            fetch(`https://mental-press-server.vercel.app/comments?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setOrders(data)
                })
        }
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to cancle this comment')
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