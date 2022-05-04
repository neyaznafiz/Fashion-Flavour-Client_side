import React from 'react';
import Banner from '../Banner/Banner';
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
        </div>
    );
};

export default Home;