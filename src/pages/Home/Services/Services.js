import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCart from './ServiceCart';

const Services = () => {

    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
            })
    }, [])


    return (
        <div>
            <div className=' grid grid-cols-3'>
                {
                    allServices.slice(0, 3).map(services => <ServiceCart services={services}></ServiceCart>)
                }
            </div>
            <Link to='/allServices'><button className='btn btn-ghost'>See All</button></Link>
        </div>
    );
};

export default Services;