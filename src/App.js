import './App.css';
import Header from './Component/Shared/Header/Header';
import Home from './Component/Pages/Home/Home'
import Blog from './Component/Pages/Blog/Blog'
import { Route, Routes } from 'react-router-dom'
import LogIn from './Component/Pages/UserAuthentication/LogIn/LogIn';
import NotFund from './Component/Shared/NotFund/NotFund';
import Inventory from './Component/Pages/Products/Inventory/Inventory';
import RequireAuth from './Component/Pages/RequireAuth/RequireAuth';
import AddProduct from './Component/Pages/Products/AddProduct/AddProduct';
import ManageProducts from './Component/Pages/Products/ManageProducts/ManageProducts';
import MyProducts from './Component/Pages/Products/MyProducts/MyProducts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../src/Style/Style.css'
import About from './Component/Pages/About/About';
import { useState } from 'react';
import Update from './Component/Pages/Products/Update/Update';
import SignUp from './Component/Pages/UserAuthentication/SignUp/SignUp';

function App() {

  return (

    <div>

      <div className='bg-zinc-800 py-3 text-center border-0 gap-0 '>
        <h2 className='text-2xl font-serif text-yellow-600'>FASHION FLAVOUR</h2>
      </div>

      <div className="flex">


        <Header className=''></Header>


        <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          {/* <Route path='/inventory' element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }></Route> */}

          <Route path='/myproducts' element={
            <RequireAuth>
              <MyProducts></MyProducts>
            </RequireAuth>
          }></Route>

          <Route path='/addproduct' element={
            <RequireAuth>
              <AddProduct></AddProduct>
            </RequireAuth>
          }></Route>

          <Route path='/manageproducts' element={
            <RequireAuth>
              <ManageProducts></ManageProducts>
            </RequireAuth>
          }></Route>

          <Route path='/update' element={
            <RequireAuth>
              <Update></Update>
            </RequireAuth>
          }></Route>


          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/login' element={<LogIn></LogIn>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/*' element={<NotFund></NotFund>}></Route>


        </Routes>

        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}

export default App;
