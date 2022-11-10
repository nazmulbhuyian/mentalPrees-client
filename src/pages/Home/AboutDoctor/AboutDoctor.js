import React from 'react';
import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'

const AboutDoctor = () => {
    return (
        <div className='flex justify-around py-14 mb-20 bg-slate-200'>
            <div className='w-2/5'>
                <h1 className='text-4xl'>Welcome to my Practice</h1>
                <p>As a psychologist and a cognitive behavioral therapist I have worked with hundreds of patients and understand the intricacies of various psychological issues that people face.
                    <br />
                    <p>My work revolves around being friendly, disciplined and organized yet flexible. I approach my patients and help them resolve their emotional issues of the past and the present, to open the door to a brighter and confident future.</p>
                </p>
            </div>
            <div>
                <div className='flex mb-5'>
                    <img src={one} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-xl'>DEPRESSION TREATMENT</h3>
                        <p>Depression is a mental illness,<br /> which one should not confuse.</p>
                    </div>
                </div>
                <div className='flex mb-5'>
                    <img src={two} alt="" />
                    <div className='ml-4'>
                    <h3 className='text-xl'>INDIVIDUAL TREATMENT</h3>
                        <p>Individual treatment is often <br /> termed as psychotherapy, and is.</p>
                    </div>
                </div>
                <div className='flex mb-5'>
                    <img src={three} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-xl'>ANXIETY TREATMENT</h3>
                        <p>Whether it is social phobia, specific <br /> phobia, post traumatic.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDoctor;