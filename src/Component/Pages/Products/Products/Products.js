import React from 'react';
import useProducts from '../../../Shared/useProducts/useProducts';
import Product from '../Product/Product';
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';

const Products = () => {

    const [product, setProduct] = useProducts()

    return (
        <div className='card-shadow  my-10 mx-10  px-5 pt-5'>

            <div>
                <p className='text-center mx-auto text-4xl font-serif font-semibold mb-5 border-b-2 border-zinc-700 w-6/12 '>INVENTORY ITEMS</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    product.slice(0, 6).map(product =>
                        <Product
                            key={product._id}
                            product={product}>
                        </Product>)
                }
            </div>

           <div className='flex justify-end mt-5 pb-2'>
           <Link to='/manageproducts' className='card-shadow hover:shadow-lg px-3 py-2 flex'>MANAGE INVENTORY <MdArrowForwardIos className='mt-1 ml-2'/></Link>
           </div>

        </div>
    );
};

export default Products;