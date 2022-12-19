import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCart from './ServiceCart';

const Services = () => {

    const [allServices, setAllServices] = useState([])



    useEffect(() => {
        fetch('https://mental-press-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
            })
    }, [])


    return (
        <div>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-8 mx-8 gap-8'>
                {
                    allServices.slice(0, 3).map(services => <ServiceCart key={services._id} services={services}></ServiceCart>)
                }
            </div>
            <div className='mx-auto w-96 my-5'>
            <Link to='/allServices'><button className='btn btn-primary'>See All</button></Link>
            </div>
        </div>
    );
};

export default Services;