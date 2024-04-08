import React, { useState } from 'react';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import '../css/home.css';

const Home = () => {
  const [image, setImage] = useState(image1);
  const [i, setI] = useState(0);
  const images = [image1, image2, image3, image4];

  function forward() {
    if (i >= 3) {
      setI(0);
    } else {
      setI((prev) => prev + 1);
    }
  }

  function backward() {
    if (i <= 0) {
      setI(3);
    } else {
      setI((prev) => prev - 1);
    }
  }

  // Update image state after updating i
  React.useEffect(() => {
    setImage(images[i]);
  }, [i, images]);

  return (
    <div className='flex w-full min-h-95vh justify-center items-center py-5'>
      <div className='flex items-center justify-between w-10/12 overflow-x-hidden'>
        <button onClick={backward} className='h-full text-4xl md:text-6xl lg:text-9xl text-gray-500 hover:text-gray-900'>
          <AiOutlineArrowLeft />
        </button>
        <div className='w-9/12 h-[80vh] overflow-hidden'>
          <img className='h-full w-full' id="mainImg" src={image} alt="Image" />
        </div>
        <button onClick={forward} className='h-full text-4xl md:text-6xl lg:text-9xl text-gray-500 hover:text-gray-900'>
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Home;
