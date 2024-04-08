import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Shop from "./components/Shop";
import Signup from "./components/Signup";
import Shop2 from './components/Shop2';
import { Route,Routes } from 'react-router-dom';
import Aboutus from "./components/Aboutus";
import Contactus from './components/Contactus';
import PostComponent from './components/PostComponent';
function App() {
  return (
    <div className="App bg-slate-100 overflow-x-auto">
      {/* <p className='font-bold'> hello</p> */}
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/shop" exact element={<Shop />} />
        <Route  path="/cart" element={<Cart />} />
        <Route  path="/about" element={<Aboutus />} />
        <Route  path="/contact" element={<Contactus />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/shop/:id' element={<PostComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
