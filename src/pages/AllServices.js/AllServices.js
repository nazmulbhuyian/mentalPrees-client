import React, { useEffect, useState } from 'react';
import AllServiceCart from './AllServiceCart';

const AllServices = () => {

    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
            })
    }, [])


    return (
        <div className=' grid grid-cols-2'>
                {
                    allServices.map(services => <AllServiceCart key={services._id} services={services}></AllServiceCart>)
                }
            </div>
    );
};

export default AllServices;