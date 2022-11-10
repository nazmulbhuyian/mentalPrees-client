import React, { useEffect, useState } from 'react';
import UseTitle from '../../Hooks/UseTitle';
import AllServiceCart from './AllServiceCart';

const AllServices = () => {

    const [allServices, setAllServices] = useState([])

    UseTitle('Service')

    useEffect(() => {
        fetch('https://mental-press-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
            })
    }, [])


    return (
        <div className=' grid grid-cols-2 gap-8 ml-52 my-10'>
            {
                allServices.map(services => <AllServiceCart key={services._id} services={services}></AllServiceCart>)
            }
        </div>
    );
};

export default AllServices;