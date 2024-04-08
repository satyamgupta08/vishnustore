import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import yourimage from '../static/logo-full.png';
import "../css/navbar.css";
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { AppContext } from '../contex/Appcontext';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const cart = useSelector(state => state.cart);
  const { posts, setPosts,fetchProduct } = useContext(AppContext);
  const [search, setSearch] = useState('');
  const navigate=useNavigate();
  

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    const searchTerm = search.toLowerCase();
    console.log(searchTerm);
    if(searchTerm===""){
      fetchProduct();
    navigate(`/shop`);
    }else{
    navigate(`/shop/?q=${searchTerm}`);
    }
// console.log(searchTerm);
//     if (searchTerm !== '') {
//       const filteredPosts = posts.filter(item =>
//         item.name.toLowerCase().includes(searchTerm)
//       );
//       setPosts(filteredPosts);
//     } else {
//       // Reset posts to original state
//       fetchProduct();
//     }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className='flex md:justify-between md:flex-row flex-col items justify-center items-center overflow-x-hidden w-full'>
      <div className='flex items-center gap-x-8 md:gap-x-2 lg:gap-x-12 md:ml-0 lg:ml-10 md:mb-0 mb-5'>
        <div className='h-[60px] w-[90px]'>
          <img className='h-full w-full' src={yourimage} alt='Logo' />
        </div>
        <div className='flex gap-x-4 md:text-lg lg:text-xl'>
          <NavLink activeClassName="active" to="/">Home</NavLink>
          <NavLink activeClassName="active" to="/shop">Shop</NavLink>
          <NavLink activeClassName="active" to="/about">AboutUs</NavLink>
          <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        </div>
      </div>
      <div className='flex items-center text-xl md:text-lg gap-x-8 md:mt-6 md:mr-0 md:gap-x-2 lg:gap-x-10 lg:mr-10 md:mr-5 mb-5'>
      <div>
      <input
       type='text'
       value={search}
       onChange={handleSearchChange}
       onKeyDown={handleKeyPress}
       placeholder='Search...'
       className='w-7/12 md:px-2 lg:px-10'
       />
      <button
       onClick={handleSearch}
       className='btn bg-blue-600 px-1 md:px-3'
        >
       Search
      </button>
      </div>
      <div>
      <div className='relative text-2xl'>
       <NavLink to="/cart">
              <BsCart />
              {cart.length > 0 && <span className='absolute bg-slate-300 rounded-full h-8 w-8 font-semibold text-green-600 bottom-2 left-4 animate-bounce'>{cart.length}</span>}
            </NavLink>
          </div>
        </div>
        <div>
          <Link to="/signup">Login/Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
