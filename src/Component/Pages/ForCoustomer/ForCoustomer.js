import React from 'react';

const ForCoustomer = () => {
    return (
        <div className='py-40  ' style={ { backgroundImage: `url(' https://i.ibb.co/tcw5C8w/coustomer-section-pic.jpg')`} }>
           
            <div className='text-center relative'>
                <h2 className='font-serif text-2xl pb-3'>Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling on Etsy.</h2>

                <div className='flex justify-center pr-12'>
                    <input className='rounded-l-full border-2 pr-40 pl-5 py-2 form-shadow' type="email" name="email" id="" placeholder='ENTER YOUR EMAIL' />

                    <button className='absolute ml-80 rounded-full font-semibold text-zinc-800 bg-yellow-600 px-3 py-2 border-2 form-shadow'>SUBSCRIBE</button>
                </div>
            </div>

        </div>
    );
};

export default ForCoustomer;