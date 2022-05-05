import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts/useProducts';
import ProductsInInventory from './ProductsInInventory/ProductsInInventory';

const ManageInventory = () => {
    const [product, setProduct] = useProducts()

    const productDeleteHandle = async (id) => {

        const proceed = window.confirm('Are you sure about delete the product ?')

        if (proceed) {

            // const { data } = await axios.delete(`http://localhost:5000/dress/${id}`, product)
            const url = `http://localhost:5000/dress/${id}`
            // setProduct(data)
            // console.log(data);
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(product),
            })
                .then(res => res.json())
                .then(data => {
                    const exist = product.filter(product => product._id !== id);
                    setProduct(exist)
                })

        }


    }

    return (
        <div className=' grid my-10 mx-auto  px-5 pt-5 '>

            <div>
                <p className='text-center mx-auto text-4xl font-serif font-semibold mb-5 border-b-2 border-zinc-700 w-6/12'>ALL PRODUCTS</p>
            </div>

            <div className='flex justify-end mb-4'>
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