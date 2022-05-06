import React from 'react';
import Banner from '../Banner/Banner';
import BestSeller from '../BestSeller/BestSeller';
import Inventory from '../Products/Inventory/Inventory';
const Home = () => {
    return (
        <div className=''>
           <div className='pt-16'>
           <Banner></Banner>
           </div>
           
           <div>
           <Inventory></Inventory>
           </div>

           <div>
               <BestSeller></BestSeller>
           </div>
        </div>
    );
};

export default Home;