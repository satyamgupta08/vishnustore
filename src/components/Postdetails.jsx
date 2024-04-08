import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../redux/slices/CartSlice';
import {remove} from '../redux/slices/CartSlice';
import { Prev } from 'react-bootstrap/esm/PageItem';
import {useNavigate} from 'react-router-dom';
const Postdetails = ({ post }) => {
    const [quantity, setQuantity] = useState(0);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const existingItemIndex = cart.findIndex(item => item.id === post.id);
    const addToCart = () => {
        setQuantity(Prev =>Prev+1);
        dispatch(
            add({
        id: post.id,
        name: post.name,
  image: post.image,
  quantity: 1,
  price:post.price // Increment the quantity by 1
            })
        );
        toast.success('Item added to cart');
        console.log(cart);
    };
const removefromcart = () =>{
    setQuantity(Prev =>Prev-1);
    dispatch(
        remove({
    id: post.id,
    name: post.name,
image: post.image,

price:post.price // Increment the quantity by 1
        })
    );
    toast.error('Item removed from cart');
    console.log(cart);
}
function component(){
    navigate(`/shop/${post.id}`);
}
    return (
        <button onClick={component}>
        <div className='flex w-96 flex-col items-center justify-center mb-10 hover:shadow-lg transition-all duration-500'>
            <div className='text-2xl font-bold'>{post.name}</div>
            <div className='h-64 w-64'>
                <img className='h-full w-full' src={post.image} alt='Post Image' />
            </div>
            <div className='flex gap-x-5 mt-2 items-center'>
                <div className='text-xl font-semibold'>Rs.{post.price}</div>
                <div>
                    {cart.some((p) => p.id === post.id) ? (
                        <div className='rounded-lg'>
                            <button className=' bg-green-500  rounded-l-full  px-2 btn  pt-[0.60rem] pb-[0.65rem]' onClick={addToCart}>
                                <AiOutlinePlus />
                            </button>
                            <button  className=' bg-green-500 border border-l-black  border-l-2 border-r-black border-r-2  btn px-3 pt-2 pb-1' >{cart[existingItemIndex].count}</button>
                            <button  className=' bg-green-500 rounded-r-full btn px-2 pt-[0.60rem] pb-[0.65rem]' onClick={removefromcart}>
                                <AiOutlineMinus />
                            </button>
                        </div>
                    ) : (
                        <button className='btn rounded-full py-1 bg-green-500 px-5' onClick={addToCart}>Add to Cart</button>
                    )}
                </div>
            </div>
        </div>
        </button>
    );
};

export default Postdetails;
