import React from 'react'
import { useContext } from 'react';
import Spinner from './Spinner';
import { AppContext } from '../contex/Appcontext';
import Postdetails from './Postdetails';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
const Shop = () => {
  const [searchParams] = useSearchParams();
  const { posts, setPosts, loading,fetchProduct,setLoading } = useContext(AppContext);
  // Get the value of the 'q' query parameter
  console.log(loading);
  const searchTerm = searchParams.get('q');
//   const getData = () => {
//       setLoading(true);
//     const filteredPosts = posts.filter(item =>
//         item.name.toLowerCase().includes(searchTerm)
//     );
//     setPosts(filteredPosts);
// setLoading(false);
// };
// useEffect(() => {
  //setTimeout(()=>{setLoading(false)},200);

// getData();
// }, [searchTerm],setPosts,posts);
// useEffect(()=>{
// //setLoading(true);
// getData();

// },[])
  
  return (
    loading ? (<Spinner/>):
    posts.length >0 ? 
    (
      <div className='flex flex-wrap w-full justify-center items-center'>
      {posts.map((post)=>(

  <Postdetails  post={post} key={post.id} />

      ))}
</div>
    )
    :(<div className='flex justify-center h-[80vh] items-center'>
      No item found
    </div>)
  )
}

export default Shop
