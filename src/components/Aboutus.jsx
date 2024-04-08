import React from 'react'
import  vishnu from "../images/vishnu.jpg"
const Aboutus = () => {
  return (
    <div className='flex flex-col h-[80vh] '>
    <div className='font-bold underline underline-offset-1  text-3xl mb-4'>ABOUT US</div>
<div className='flex lg:flex-row md:flex-col flex-col justify-center items-center w-screen gap-x-10'>

  <div className='md:w-4/12 w-8/12 ml-10'><img className='w-full' src={vishnu}/></div>
  <div className='lg:w-7/12 md:w-11/12 w:9/12 ml-5 mr-5' >
    <p className='md:text-2xl text-xl text-left text-justify '>
Welcome to Vishnu Medical Store, your trusted source for quality healthcare products and services since 2001. At Vishnu Medical Store we are committed to providing our community with the highest level of care and convenience. Founded 23 years ago by me, our shop has been a cornerstone of health and wellness in Sector-3 Ballabgarh Faridabad.
Our mission is simple: to offer a comprehensive range of pharmaceuticals, medical supplies, and wellness products, all while delivering personalized service and expert advice to our customers. Whether you're managing a chronic condition, seeking over-the-counter remedies, or simply looking for health and wellness solutions, we're here to help.
Over the years, we've built a team of dedicated professionals who are passionate about serving our customers. From our experienced pharmacists to our knowledgeable staff, everyone at Vishnu Medical Store is committed to your health and satisfaction.
In addition to our wide selection of products, we take pride in being active members of the community. From health education initiatives to local partnerships, we strive to make a positive impact beyond our shop's doors.
At Vishnu Medical Store, your health and well-being are our top priorities.We value your trust and strive to exceed your expectations with every visit. Thank you for choosing us as your healthcare partner.
We invite you to explore our website, visit our shop, or contact us with any questions or feedback. We look forward to serving you and your family for many years to come.
<br/>
Warm regards,
<br/>
Vipin Gupta
<br/>
Owner, Vishnu Medical Store
    </p>
</div>
</div>

</div>
  )
}

export default Aboutus