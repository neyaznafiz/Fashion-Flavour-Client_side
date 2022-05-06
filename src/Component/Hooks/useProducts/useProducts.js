import { useEffect } from "react";
import { useState } from "react";
// const axios = require('axios');


const useProducts = () => {

    const [product, setProduct] = useState([])


    useEffect(() => {
        const url = `https://mighty-journey-99056.herokuapp.com/dress`

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])

    return [product, setProduct]
};

export default useProducts