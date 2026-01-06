import axios from '../utils/axios'
import React, { useEffect } from 'react'
import pizza from "../assets/pizza.png";

const Home = () => {

  const getproduct = async ()=>{
      try {
        const response = await axios.get('/products')
        console.log(response.data);
        
        
      } catch (error) {
        
      }
  }

  useEffect(()=>{
     getproduct()
      
  },[])
  return (
    <div className=' parent bg-[#FFFFFF]'>
      
      <div className="img-div h-[80vh]  w-full bg-[#FFFFFF] flex justify-between text-black">
       <div className="left w-[65%] text-center pt-30  ">
        <h1 className=' text-8xl capitalize font-semibold'>testy food</h1>
        <h3 className=' text-6xl text-[#E34C25] capitalize font-semibold mt-4'>collection</h3>
       
        <p className='text-sm capitalize font-semibold mt-3 px-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tenetur fugit quibusdam et quia architecto modi. Aut quae ex ducimus id exercitationem! Harum, aperiam! Maiores soluta velit in voluptatum odit.</p>
       </div>
       <div className="right w-[50%] h-full">
         <img className='h-full w-full object-center object-cover p-10' 
        src={pizza}
          alt="" />
       </div>
      </div>

      <div className="main h-[25%] w-full bg-[#FFFFFF] flex justify-evenly   ">

        <div className="box  w-[10%]">
          <img className=' hover:scale-105 duration-110'  src="https://i.pinimg.com/1200x/42/c8/12/42c81248c35a8fed91c98154d542cd56.jpg" alt="" />
                       <h1 className='text-black text-center px-12 font-bold capitalize'>burgur</h1>

        </div>

         <div className="box  w-[10%]">
          <img className=' hover:scale-105 duration-110'  src="https://i.pinimg.com/736x/7b/10/87/7b1087723bd9edd76a540d99ae3e199d.jpg" alt="" />
                         <h1 className='text-black text-center px-12 font-bold capitalize whitespace-nowrap'>French fry </h1>

        </div>

         <div className="box  w-[10%]">
          <img className=' hover:scale-105 duration-110'  src="https://i.pinimg.com/736x/44/f1/63/44f1634e8d7b007ba3b3b7410c37458e.jpg" alt="" />
                          <h1 className='text-black text-center px-12 font-bold capitalize'>Pasta</h1>

        </div>

         <div className="box  w-[10%]">
          <img className='px-5 hover:scale-105 duration-110'  src="https://i.pinimg.com/736x/4e/cb/1a/4ecb1a73df35dbf47cd43ccb03501590.jpg" alt="" />
                         <h1 className='text-black text-center px-12 font-bold capitalize  whitespace-nowrap'>cold drink</h1>

        </div>

         <div className="box  w-[10%]">
          <img className=' hover:scale-105 duration-110'   src="https://i.pinimg.com/1200x/b2/86/3d/b2863d74bc4dfd85ab36b8d396666a4a.jpg" alt="" />
             <h1 className='text-black text-center px-12 font-bold capitalize'>sandwich</h1>
        </div>
      </div>
     
    </div>
  
  )
}

export default Home