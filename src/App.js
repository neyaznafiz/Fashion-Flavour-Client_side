import './App.css';
import Header from './Component/Shared/Header/Header';
import Home from './Component/Pages/Home/Home'
import Blog from './Component/Pages/Blog/Blog'
import {Route, Routes} from 'react-router-dom'
import LogIn from './Component/Pages/UserAuthentication/LogIn/LogIn';
import NotFund from './Component/Pages/NotFund/NotFund';

function App() {
  return (
    <div className="App">
     <Header></Header>

     <Routes>

<Route path='/' element={<Home></Home>}></Route>
<Route path='/blog' element={<Blog></Blog>}></Route>
<Route path='/login' element={<LogIn></LogIn>}></Route>
<Route path='/*' element={<NotFund></NotFund>}></Route>


     </Routes>
    </div>
  );
}

export default App;
