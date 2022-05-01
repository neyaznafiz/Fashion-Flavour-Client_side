import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

function App() {
  return (
    <div className="flex">
      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>

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
        

        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/*' element={<NotFund></NotFund>}></Route>


      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
