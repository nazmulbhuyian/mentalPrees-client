import React from 'react';

const Question = () => {
    return (
        <div className=''>
            <h1 className='text-3xl text-zinc-400 mx-96 mt-5'>Frequently Asked Questions.</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-3/5 bg-slate-100 my-10 p-24 mx-auto'>
                <div>
                    <h3 className='font-bold text-gray-600 text-xl mb-3'>What can I expect in the first session when I see a therapist?</h3>
                    <p>Aliquam erat volutpat. Morbi volutpat velit ac sem vulputate sollicitudin. Aliquam tincidunt finibus leo, eget suscipit augue eleifend in...</p>
                </div>
                <div>
                    <h3 className='font-bold text-gray-600 text-xl mb-10'>What are the signs of being abused by partner?</h3>
                    <p>Morbi volutpat velit ac sem vulputate sollicitudin. Aliquam tincidunt finibus leo, eget suscipit augue eleifend in. Aliquam erat volutpat...</p>
                </div>
                <div>
                    <h3 className='font-bold text-gray-600 text-xl mb-3'>What can I expect in the first session when I see a therapist?</h3>
                    <p>Aliquam erat volutpat. Morbi volutpat velit ac sem vulputate sollicitudin. Aliquam tincidunt finibus leo, eget suscipit augue eleifend in...</p>
                </div>
            </div>
        </div>
    );
};

export default Question;