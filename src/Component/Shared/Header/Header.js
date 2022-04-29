import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenuUnfold } from 'react-icons/ai';


const Header = () => {
    return (
        <div className=''>
            
            {/* <nav className="navbar navbar-dark bg-dark">
                <div className="">
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i><AiOutlineMenuUnfold></AiOutlineMenuUnfold></i>
                    </button>
                </div>
            </nav> */}

            <div className=' bg-zinc-800 text-white py-3'>
                <h2 className='text-center'> Fashion Flavour </h2>
            </div>

            {/* <div className="collapse" id="navbarToggleExternalContent"> */}

                <div className="w-28 h-full shadow-md bg-zinc-800 px-1 absolute grid justify-center pt-44">
                    <ul className="relative">
                        <li className="relative">
                            <Link to='/' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:border-b-2 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Home</Link>
                        </li>
                        <li className="relative my-3">
                            <Link to='/blog' className="flex items-center text-sm py-4 px-7 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:border-b-2 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Blog</Link>
                        </li>
                        <li className="relative">
                            <Link to='/login' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:border-b-2 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">LogIn</Link>
                        </li>
                    </ul>
                </div>




            {/* </div> */}




            {/* <div className="w-28 h-full shadow-md bg-zinc-800 px-1 absolute grid justify-center pt-44">
  <ul className="relative">
    <li className="relative">
      <Link to='/' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:border-b-2 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Home</Link>
    </li>
    <li className="relative my-3">
      <Link to='/blog' className="flex items-center text-sm py-4 px-7 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:border-b-2 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Blog</Link>
    </li>
    <li className="relative">
      <Link to='/login' className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:border-b-2 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">LogIn</Link>
    </li>
  </ul>
</div> */}


        </div>
    );
};

export default Header;