import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCart from './ServiceCart';

const Services = () => {

    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
            })
    }, [])


    return (
        <div>
            <div className=' grid grid-cols-3 mb-8'>
                {
                    allServices.slice(0, 3).map(services => <ServiceCart key={services._id} services={services}></ServiceCart>)
                }
            </div>
            <Link to='/allServices'><button className='btn btn-ghost bg-slate-300 mx-96 my-5'>See All</button></Link>
        </div>
    );
};

export default Services;