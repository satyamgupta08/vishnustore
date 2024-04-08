import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Shop from './Shop';
import { AppContext } from '../contex/Appcontext';

const Shop2 = () => {
    const { posts, setPosts, fetchProduct } = useContext(AppContext);
    const location = useLocation();
    const path = location.pathname;
    const searchTerm = path.split('/')[2].toLowerCase();
console.log(searchTerm);
    const getData = () => {
      
            const filteredPosts = posts.filter(item =>
                item.name.toLowerCase().includes(searchTerm)
            );
            setPosts(filteredPosts);
      console.log(filteredPosts);
    };
    useEffect(() => {
        

        getData();
    }, [searchTerm]);
    useEffect(()=>{
getData();
    },[])

    return (
        <Shop />
    );
}

export default Shop2;
