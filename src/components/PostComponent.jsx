import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../contex/Appcontext';
import { toast } from 'react-hot-toast';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../redux/slices/CartSlice';
import {remove} from '../redux/slices/CartSlice';
import { Prev } from 'react-bootstrap/esm/PageItem';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
const PostComponent = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const { posts } = useContext(AppContext);
  const [quantity, setQuantity] = useState(0);
  console.log(id);
  console.log(posts);
  const post = posts.find((item) => item.id === id);

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
  // Find the post with the matching ID
 
  // If post is undefined (i.e., not found), render a message or return null
 

  // Render post details
  return (
    <div className='flex ml-5 justify-center items-center h-[80vh] w-[95vw] gap-x-10'>
      <div className='h-[70vh] w-[30vw]'>
        <img className='h-full w-full' src={post.image} alt={post.name} />
      </div>
      <div className='flex gap-y-5 flex-col h-[70vh] w-[60vw]'>
        <div className='font-bold text-3xl'>{post.name}</div>
        <div className='text-2xl '>{post.description}</div>
        <div className='text-2xl'>Company: {post.company}</div>
        <div className='text-2xl'>Rs. {post.price}</div>
     <div className='text-2xl'>Category  : {post.category}</div>
   <div>
    <input type='file'></input>
   </div>
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
  );
};

export default PostComponent;
