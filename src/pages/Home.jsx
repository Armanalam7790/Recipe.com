import axios from '../utils/axios'
import React, { useEffect } from 'react'

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
    <div>
      <h1>home</h1>
      <button onClick={getproduct}>get products</button>
    </div>
  
  )
}

export default Home