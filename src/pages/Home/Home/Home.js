import React from 'react';
import AboutDoctor from '../AboutDoctor/AboutDoctor';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutDoctor></AboutDoctor>
            <Services></Services>
        </div>
    );
};

export default Home;