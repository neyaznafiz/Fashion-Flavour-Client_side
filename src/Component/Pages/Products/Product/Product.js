import React from 'react';

const Product = ({ product }) => {

    const { name, price, img, quantity, supplier, description } = product

    return (
        <div>

<div className='border grid grid-cols-3  w-4/12 mx-auto'>

<div className='grid my-5'>
<img src={img} alt="" />
<span>{name}</span>
<span>{price}</span>
<span>{quantity}</span>
<span>{supplier}</span>
<span>{description}</span>
</div>


</div>

        </div>
    );
};

export default Product;