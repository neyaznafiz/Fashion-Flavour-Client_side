// import axios from 'axios';
import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts/useProducts';
import ProductsInInventory from './ProductsInInventory/ProductsInInventory';

const ManageInventory = () => {

    const navigate = useNavigate()
    const [product, setProduct] = useProducts()

    const productDeleteHandle = async (id) => {

        // const proceed = window.confirm('Are you sure?');

        //     if(proceed){
        //         const url = `https://mighty-journey-99056.herokuapp.com/dress/${id}`;
        //         fetch(url, {
        //             method: 'DELETE'
        //         })
        //         .then(res => res.json())
        //         .then(data => {
        //             const exist = product.filter(product => product._id !== id);
        //                setProduct(exist);
        //         })
        //     }


        // if (window.confirm('Are you sure you want to delete?')) {
        //     console.log('deleted');
        //     fetch(`https://mighty-journey-99056.herokuapp.com/dress/${id}`, {
        //         method: 'DELETE',
        //         headers: {
        //             'content-type': 'application/json',
        //         },
        //         body: JSON.stringify(product),
        //     })
        //     const exist = product.filter((product) => product._id !== id);
        //     setProduct(exist);
        // } else {
        //     console.log('cancel');
        // }

        if (window.confirm('Are you sure you want to delete?')) {
            await axios.delete(`https://mighty-journey-99056.herokuapp.com/dress/${id}`, product)
            const exist = product.filter((product) => product._id !== id);
            setProduct(exist);
        } else {
            console.log('cancel');
        }

    }

    return (
        <div className=' grid my-10 mx-auto  px-5 pt-5 '>

            <div>
                <p className='text-center mx-auto text-4xl font-serif font-semibold mb-5 border-b-2 border-zinc-700 w-6/12'>ALL PRODUCTS</p>
            </div>

            <div className='flex justify-between mb-4'>

                <div className=''>
                    <button onClick={() => navigate(-1)} className='card-shadow py-2 px-4 font-semibold'>BACK</button>
                </div>

                <Link to='/addproduct' className='card-shadow px-3 py-2 font-semibold hover:text-black'>ADD NEW ITEM</Link>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    product.map(inventoryProduct => <ProductsInInventory
                        key={inventoryProduct._id}
                        inventoryProduct={inventoryProduct}
                        productDeleteHandle={productDeleteHandle}>
                    </ProductsInInventory>
                    )
                }
            </div>
        </div>
    );
};

export default ManageInventory;