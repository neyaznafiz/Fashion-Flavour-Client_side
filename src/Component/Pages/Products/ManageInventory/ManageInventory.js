import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../Shared/useProducts/useProducts';
import ProductsInInventory from '../ProductsInInventory/ProductsInInventory';

const ManageInventory = () => {
    const [product, setProduct] = useProducts()

    const productDeleteHandle = id => {

        const proceed = window.confirm('Are you sure about delete the product ?')
        
        if (proceed) {
            console.log('delete', id);
            const url = `http://localhost:5000/dress/${id}`
            console.log(url)

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
                
        }
        else { }
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
                    product.map(inventoryProduct =>
                        <ProductsInInventory
                            key={product._id}
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