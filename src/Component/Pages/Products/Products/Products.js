import React from 'react';
import useProducts from '../../../Shared/useProducts/useProducts';
import Product from '../Product/Product';

const Products = () => {

    const [product, setProduct] = useProducts()

    return (
        <div className='card-shadow  my-10 mx-10  p-5'>

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

        </div>
    );
};

export default Products;