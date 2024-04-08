import React, { useContext } from 'react'
import { AppContext } from '../contex/Appcontext'

import Spinner from './Spinner';
import { useDispatch,useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
const Cart = () => {
 const cart = useSelector((state) => state.cart);
 const dispatch =useDispatch();
let sum=0;
cart.forEach(element => {
  sum+=element.count*element.price
});
return (
  cart.length > 0 ? (
    <div className='flex md:flex-row  justify-center lg:gap-x-24 md:gap-x-12 gap-x-0'>
    <div className='flex flex-col mt-5 gap-y-5'>
{
    cart.map((item)=> (
   <CartItem item ={item}  key={item.id}/>
   
    ))
}
</div>
<div>
<div className='flex flex-col gap-x-5 justify-between h-[75vh]'>
  <div className='flex flex-col gap-x-2'>
    <div className='text-2xl text-green-800 font-semibold'>YOUR CART</div>
    <div className='md:text-5xl text-2xl text-green-600 font-bold'> SUMMARY</div>
    
  </div>
  <div className='font-semibold text-xl'>Total Items: {cart.length}</div>
  </div>
  <div>
    <div className='font-semibold md:text-2xl text-xl'> Total Amount  : Rs.{sum
     } </div>
    <div className='btn bg-green-500 rounded-full md:text-2xl text-xl font-semibold capitalize uppercase'>checkout Now</div>
  </div>
</div>
    </div>
  ) : (<div className='flex flex-col justify-center items-center h-[80vh]'>
  <div className='text-3xl font-bold text-green-600'>Your cart is empty</div>
  <div className='md:text-2xl text-xl btn bg-blue-500 px-5 py-1 mt-3 rounded-full'>
 <Link to="/shop">  Shop</Link> </div>
  </div>)
)
 }

export default Cart