import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';



const Header = () => {

    const [user]=useAuthState(auth)

    const handleSignOut =()=>{
        signOut(auth)
    }


    return (
        <div className=''>
            
           

            <div className=' bg-zinc-800 text-white py-3'>
                <h2 className='text-center'> Fashion Flavour </h2>
            </div>

           

                <div className="w-28 h-full shadow-md bg-zinc-800 px-1 absolute grid justify-center pt-44">
                    <ul className="relative">
                        <li className="relative">
                            <Link to='/' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:border-b-2 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Home</Link>
                        </li>
                        <li className="relative my-3">
                            <Link to='/blog' className="flex items-center text-sm py-4 px-7 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:border-b-2 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Blog</Link>
                        </li>

                        {
                            !user ?
                            <li className="relative">
                            <Link to='/login' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:border-b-2 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">LogIn</Link>
                        </li>
                        :
                        <li className="relative">
                            <Link to='/login' onClick={handleSignOut} className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:border-b-2 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Log Out</Link>
                        </li>
                        }
                    </ul>
                </div>

        </div>
    );
};

export default Header;