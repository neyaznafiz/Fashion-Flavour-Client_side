import React from 'react';
import { Link } from 'react-router-dom';

const NotFund = () => {
    return (
        <div>
          <div className='grid justify-center my-40'>
          <div className='border w-80'>
           <h2 className='text-6xl font-semibold text-red-600'>404</h2>
           <p className='text-xl'>Your Page is not fund !!!</p>
           </div>
           <div>
               <Link to='/'> GO TO HOME</Link>
           </div>
          </div>
        </div>
    );
};

export default NotFund;