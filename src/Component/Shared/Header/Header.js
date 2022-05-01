import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import control from '../../../Images/control.png'
import logo from '../../../Images/logo.png'
import { FiHome } from 'react-icons/fi';
import { MdOutlineInventory2 } from 'react-icons/md';
import { CgShoppingBag } from 'react-icons/cg';
import { CgAddR } from "react-icons/cg";
import { BiNotepad } from "react-icons/bi";
import { FaBullseye } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineManageAccounts } from "react-icons/md";



const Header = () => {
    
    const [user] = useAuthState(auth)

    const [open, setOpen] = useState(false)

    const handleSignOut = () => {
        signOut(auth)
    }


    return (
        <div className='flex'>

            <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen px-3 pt-8 bg-zinc-800 relative`}>

                <img src={control} className={`
                absolute cursor-pointer rounded-full -right-3 top-9 w-8 ${!open && "rotate-180"}`} alt="" onClick={() => setOpen(!open)} />

                <div className='flex gap-x-4 items-center'>
                    <img src={logo} alt="" className={` cursor-pointer duration-500`} />

                    <h1 className={`font-serif text-yellow-600 origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>Fashion Flavour</h1>
                </div>


                <nav className='pt-6'>

                    <Link  to='/' className={`text-yellow-600 text-lg mb-4 flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                        <span className='flex items-center'> <FiHome className='text-2xl'/> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>HOME</span> </span>
                    </Link>

                    <Link to='/inventory' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                        <span className='flex items-center'> <MdOutlineInventory2 className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>INVENTORY</span> </span>
                    </Link>

                    <Link to='/myproducts' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                        <span className='flex items-center'> <CgShoppingBag className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>MY PRODUCTS</span> </span>
                    </Link>

                    <Link to='/addproduct' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                        <span className='flex items-center'> <CgAddR className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>ADD PRODUCT</span> </span>
                    </Link>

                    <Link to='/manageproducts' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                        <span className='flex items-center'> <MdOutlineManageAccounts className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>MANAGE PRODUCTS</span> </span>
                    </Link>

                    <Link to='/blog' className={`text-yellow-600 text-lg mt-4 flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                        <span className='flex items-center'>  <BiNotepad className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>BLOG</span> </span>
                    </Link>

                    <Link to='/about' className={`text-yellow-600 text-lg mb-4 flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                        <span className='flex items-center'> <FaBullseye className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>ABOUT</span> </span>
                    </Link>

                    {!user ?
                        <Link to='/login' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                            <span  className='flex items-center'> <HiOutlineLogout className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>LOGIN</span> </span>
                        </Link>
                        :
                        <Link to='/' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
                            <span onClick={handleSignOut} className='flex items-center'> <HiOutlineLogin className='text-2xl' />   <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>LOG OUT</span> </span>
                        </Link>
                    }

                </nav>

            </div>
             
        </div>
    );
};

export default Header;