import { useState } from "react";
const axios = require('axios');


const useProducts = () => {

    const [product, setProduct] = useState([])

    axios.get(`https://fashion-flavour.herokuapp.com/dress`, )

    return 
};

export default useProducts