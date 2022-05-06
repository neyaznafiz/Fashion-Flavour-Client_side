import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase/firebase.init';
import useProducts from '../../../Hooks/useProducts/useProducts';

const MyProducts = () => {

    const [user] = useAuthState(auth)
    const [product, setProduct] = useProducts([])
    const navigate = useNavigate();


    useEffect(() => {

        const getProductsFilterByEmail = async () => {

            const email = user.email;

            const url = `https://mighty-journey-99056.herokuapp.com/mydress?email=${email}`;
            try {
                const { data } = await axios.get(url);
                setProduct(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getProductsFilterByEmail()
    }, [user])

    return (
        <div className='mt-16'>
            <h2>your product: {product.length}</h2>
            {

                product.map(product => <div key={product._id}>
                    <p>{product.email}</p>
                    <p>{product.name}</p>
                </div>)
            }
        </div>
    );
};

export default MyProducts;