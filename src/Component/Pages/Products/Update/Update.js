import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

    const navigate = useNavigate()

    const { Id } = useParams()

    const [product, setProduct] = useState({})

    const { img, name, supplier, description, price, quantity } = product

    useEffect(() => {
        // const url = `http://localhost:5000/dress/${Id}`
        fetch(`http://localhost:5000/dress/${Id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])



    return (
        <div className='mt-16 w-full'>

            <div className=" grid lg:justify-center mx-3 my-10 lg:my-28">
                <div className="grid grid-cols-1 lg:flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img className=" w-full h-48 lg:h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg hover:rounded-lg" src={img} alt="" />

                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-3xl font-medium mb-2 font-serif">{name}</h5>

                        <div className=''>
                            <p className="text-gray-600 text-lg font-bold pb-4">Supplier: {supplier}</p>
                            <p className="text-gray-700 text-base mb-4"> {description?.slice(0, 130)}.... </p>

                            <div className='flex justify-between font-semibold'>
                                <p className="text-gray-900">Price : ${price}</p>
                                <p className="text-gray-600">Quantity : {quantity}</p>
                            </div>
                        </div>


                        <div className='lg:flex lg:justify-between mt-3 h-full items-end'>
                            <div className='grid'>
                                <input type="number" name="restock" placeholder='RESTOCK' id="" className=' card-shadow mb-2 px-2 py-2' />
                                <button className='card-shadow text-center hover:shadow-lg hover:text-black font-semibold px-3 py-2'>ADD STOCK</button>
                            </div>
                            <div className='flex justify-center mt-2'>
                                <button className='card-shadow text-center hover:shadow-lg hover:text-black font-semibold px-3 py-2'>DELIVERY</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' py-4'>
                    <button onClick={() => navigate(-1)} className='card-shadow py-2 px-4 font-semibold'>BACK</button>
                </div>

            </div>


        </div>
    );
};

export default Update;