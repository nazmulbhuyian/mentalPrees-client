import React, { useEffect, useState } from 'react';
import AllServiceCart from './AllServiceCart';

const AllServices = () => {

    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
            })
    }, [])

    return (
        <div className=' grid grid-cols-2'>
                {
                    allServices.map(services => <AllServiceCart services={services}></AllServiceCart>)
                }
            </div>
    );
};

export default AllServices;