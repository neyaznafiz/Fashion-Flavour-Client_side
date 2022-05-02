import React from 'react';
import useProducts from '../../../Shared/useProducts/useProducts';
import Product from '../Product/Product';

const Products = () => {

    const [product, setProduct] = useProducts()

    return (
        <div className='flex'>
            {
                product.map(product => 
                    <Product
                        key={product._id}
                        product={product}>
                    </Product>)
                
            }
        </div>
    );
};

export default Products;