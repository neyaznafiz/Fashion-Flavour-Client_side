import React from 'react';
import useProducts from '../../../Shared/useProducts/useProducts';
import ProductsInInventory from '../ProductsInInventory/ProductsInInventory';

const Inventory = () => {

    const [product] = useProducts()
    console.log(product);
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    product.map(inventoryProduct => 
                        <ProductsInInventory
                            key={product._id}
                            inventoryProduct={inventoryProduct}>
                        </ProductsInInventory>
                    )
                }
            </div>
        </div>
    );
};

export default Inventory;