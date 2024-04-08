import React from 'react';
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({ item }) => {
    console.log(item);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    const addToCart = () => {
        dispatch(
            add({
                id: item.id,
                name: item.name,
                image: item.image,
                quantity: 1,
                price: item.price,
            })
        );
        toast.success('Item added to cart');
    };

    const removeFromCart = () => {
        dispatch(
            remove({
                id: item.id,
                name: item.name,
                image: item.image,
                quantity: 1,
                price: item.price,
            })
        );
        toast.error('Item removed from cart');
    };

    return (
        <>
            {item.count > 0 && (
                <div className='flex flex-row gap-x-5 pb-5 border-b-4 border-b-black'>
                    <div>
                        <img className='md:w-56 md:h-48 w-48 h-36' src={item.image} alt={item.name} />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='font-bold md:text-2xl text-xl'>{item.name}</div>
                        <div className='flex flex-col md:flex-row gap-x-5'>
                            <div className='font-semibold md:text-xl text-l text-green-700'>Rs.{item.price}</div>
                            <div>
                                <button className='bg-green-500 md:px-2 px-1 btn pt-[0.60rem] pb-[0.65rem]' onClick={addToCart}>
                                    <AiOutlinePlus />
                                </button>
                                {existingItem && (
                                    <button className='bg-green-500 border border-l-black border-l-2 border-r-black border-r-2 btn md:px-3 px-1 pt-2 pb-1'>
                                        {existingItem.count}
                                    </button>
                                )}
                                <button className='bg-green-500 btn md:px-2 px-1 pt-[0.60rem] pb-[0.65rem]' onClick={removeFromCart}>
                                    <AiOutlineMinus />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartItem;
