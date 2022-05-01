import React from 'react';

const AddProduct = () => {
    return (
        <div className='flex mx-auto'>
            
            <div className=' w-96 my-20 grid gap-3 border py-5 px-10'>
            <input type="text" name='name' placeholder='NAME' className='border px-2 py-2 rounded-md' required />
            <input type="number" name='price' placeholder='PRICE' className='border px-2 py-2 rounded-md' required />
            <input type="number" name='quantity' placeholder='QUANTITY' className='border px-2 py-2 rounded-md' required />
            <input type="text" name='name' placeholder='SUPPLIER NAME' className='border px-2 py-2 rounded-md' required />
            <input type="text" name='description' placeholder='WRITE PRODUCT DESCRIPTION' className='border px-2 py-2 rounded-md' required />
            <textarea type="text" name='description' placeholder='WRITE PRODUCT DESCRIPTION' className='border px-2 py-2 rounded-md' required />
            <input type="text" name='photo' placeholder='PRODUCT IMAGE URL' className='border px-2 py-2 rounded-md' required />

            <input type="submit" value="ADD PRODUCT" className='border bg-zinc-800 text-yellow-600 py-2 rounded-md'/>

            </div>

        </div>
    );
};

export default AddProduct;