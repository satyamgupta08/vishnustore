import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
let data;
  const [searchParams] = useSearchParams();

  async function fetchProduct() {
    setLoading(true);
    const url = "https://api.pujakaitem.com/api/products";

    try {
      let res = await fetch(url);
      data = await res.json();
      console.log(data);
      if (!res.ok) throw new Error(data.message || 'Something went wrong');
      setPosts(data);
     // setLoading(false);
    } catch (error) {
      console.log('Error', error);
      //setLoading(false);
    }
  }

  useEffect(() => {
    console.log(searchTerm);
    // Update searchTerm state whenever the searchParams change
    setSearchTerm(searchParams.get('q') || '');
  }, [searchParams]);

  useEffect(() => {
    async function getData() {
      try {
        await fetchProduct();
        console.log(data);
        console.log(searchTerm);
        const filteredPosts = data.filter(item =>
          item.name.replace(/\s/g, "").toLowerCase().includes(searchTerm.toLowerCase())
        );
        setPosts(filteredPosts);
        console.log(loading);
        setTimeout(()=>{setLoading(false)},250);
      } catch (error) {
        console.log('Error', error);
      }
      finally{
        // setTimeout(()=>{setLoading(false)},200);
      }
    }

    getData();
    //setTimeout(()=>{setLoading(false)},200);
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, posts, setPosts, setLoading, fetchProduct }}>
      {children}
    </AppContext.Provider>
  );
}
