import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, name, price, img, quantity, supplier, description } = product

    const navigate = useNavigate()
    const navigateToUpdate = id => {
        navigate(`/update/${_id}`)
    }

    return (
        <div className=''>

                <div className="flex justify-center ">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg hover-zoom">
                        <img className=" w-full h-48 lg:h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg hover:rounded-lg" src={img} alt="" />
                        <div className="p-6 flex flex-col justify-start">
                            <h5 className="text-gray-900 text-3xl font-medium mb-1 font-serif">{name}</h5>

                            <div className=''>
                                <p className="text-gray-600 text-lg font-bold pb-4">Supplier: {supplier}</p>
                                <p className="text-gray-700 text-base mb-4"> {description.slice(0, 110)}.... </p>

                                <div className='flex justify-between font-semibold'>
                                    <p className="text-gray-600">Price : ${price}</p>
                                    <p className="text-gray-600">Quantity : {quantity}</p>
                                </div>
                            </div>

                            <div className='flex justify-end h-full items-end'>
                                <button onClick={()=>navigateToUpdate(_id)}  className='card-shadow text-center hover:shadow-lg hover:text-black font-semibold px-3 py-2'>UPDATE</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    );
};

export default Product;