import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {

    const { Id } = useParams()

    const [product, setProduct] = useState({})

    // useEffect(() => {
    //     // const url = `http://localhost:5000/dress/${Id}`
    //     fetch(`http://localhost:5000/dress/${Id}`)
    //     .then(res => res.json())
    //     .then(data => setProduct(data))
    // }, [])



    return (
        <div className='mt-16'>
            <h2>update {Id}</h2>
            <h2>name {product.name}</h2>
        </div>
    );
};

export default Update;