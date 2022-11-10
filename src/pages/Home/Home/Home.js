import React from 'react';
import AboutDoctor from '../AboutDoctor/AboutDoctor';
import Banner from '../Banner/Banner';
import Question from '../Question/Question';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutDoctor></AboutDoctor>
            <Services></Services>
            <Question></Question>
        </div>
    );
};

export default Home;