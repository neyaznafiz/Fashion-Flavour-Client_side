import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const axios = require('axios');

const AddProduct = () => {

    // const { handleAddProduct } = useForm()

    const handleAddProduct = async (event) => {
        event.preventDefault()

        const product = {
            name: event.target.name.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            supplier: event.target.suppliername.value,
            description: event.target.description.value,
            img: event.target.photo.value
        }

        const { data } = await axios.post('http://localhost:5000/dress', product)

        if (!data.success) {
             toast.error(data.error)
        }
        else {
            toast.success(data.message)
        }

    }

    return (
        <div className=' w-full h-screen bg-yellow-600 border-8 border-yellow-600'>

            <div className='border-double border-8 m-1 h-full border-zinc-800'>

                <div className='my-8  flex justify-center'>


                    <form onSubmit={handleAddProduct} className=' text-white grid w-4/12 gap-4 py-10 px-10 font-serif form-shadow'>

                        <h2 className='text-center text-4xl font-semibold'>ADD YOUR PRODUCT HERE</h2>

                        <input type="text" name='name' placeholder='NAME' className='border px-2 py-2 rounded-md form-shadow border-0 text-zinc-800' required />
                        <input type="number" name='price' placeholder='PRICE' className='border px-2 py-2 rounded-md form-shadow border-0 text-zinc-800' required />
                        <input type="number" name='quantity' placeholder='QUANTITY' className='border px-2 py-2 rounded-md form-shadow border-0 text-zinc-800' required />
                        <input type="text" name='suppliername' placeholder='SUPPLIER NAME' className='border px-2 py-2 rounded-md form-shadow border-0 text-zinc-800' required />
                        <input type="text" name='photo' placeholder='PRODUCT IMAGE URL' className='border px-2 py-2 rounded-md form-shadow border-0 text-zinc-800' required />
                        <textarea type="text" name='description' placeholder='WRITE PRODUCT DESCRIPTION' className='border px-2 py-2 rounded-md form-shadow border-0 text-zinc-800' required />

                        <input type="submit" value="ADD PRODUCT" className='border bg-zinc-800 text-white py-2 rounded-md border-0 w-5/12 mx-auto btn-shadow' />
                    </form>

                </div>

            </div>

        </div>
    );
};

export default AddProduct;

