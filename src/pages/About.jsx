import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
 const navigate =  useNavigate()
  return (
    <div className='px-30 pt-25 bg-[#FFFFFF] h-screen w-screen text-black flex gap-20 '>
      <div className='flex  flex-col  w-2xl text-center'>
        <h1 className='text-5xl font-semibold mt-15'>About <span className='text-[#FF6106]'>Foodies </span>  <i className="ri-restaurant-line text-red-900"></i></h1>
      <p className=' mt-8 text-1xl font-bold text-left text-[#282421]'>Welcome to Foodies, your go-to destination for delicious recipes made with love and simplicity. Here you will find a wide variety of dishes, from quick everyday meals to special recipes for festivals and family gatherings. Each recipe is carefully crafted with easy steps, clear instructions, and easily available ingredients. Whether you are a beginner or an experienced cook, Foodies helps you explore new flavors, improve your cooking skills, and enjoy the joy of homemade food every day.
</p>
<button className='bg-[#FF6106] px-10 py-2  w-fit text-white font-semibold rounded mt-5 border-b-black cursor-pointer' onClick={()=>{
  navigate('/recipe')
}}>Recipe</button>
      </div>

      <div className="w-[50%] h-[80%] flex justify-center items-center">
  <img
    className="h-full w-full object-cover object-center rounded-xl p-10 border-2 border-b-blue-700"
    src="https://i.pinimg.com/736x/38/c9/be/38c9bed8afd866d6795f5164e7e7a9f8.jpg"
    alt="Food"
  />
</div>

    </div>
  )
}

export default About