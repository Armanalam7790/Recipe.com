import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return <div className='fixed w-full z-10 p-4 bg-[#ff6106] font-semibold flex items-center justify-between gap-8 text-sm capitalize  px-30'>
    <h1 className='font-semibold text-3xl'>Recipe-<span>hub</span></h1>
      <div className='flex gap-7'>
        
          <NavLink style={{fontSize:"16px"}} className={(e)=> e.isActive ? "text-black": " "  } to='/' >home</NavLink>
          <NavLink style={{fontSize:"16px"}} className={(e)=> e.isActive ? "text-black": " "  } to='/about' >about</NavLink>
          <NavLink style={{fontSize:"16px",font:"bold"}} className={(e)=> e.isActive ? "text-black": " " } to='/recipe' >recipe</NavLink>

          <NavLink style={{fontSize:"16px"}} className={(e)=> e.isActive ? "text-black": " "  } to='/create-recipe' >create</NavLink>

          <NavLink style={{fontSize:"16px"}} className={(e)=> e.isActive ? "text-black": " "  } to='/fav' >Favroite</NavLink>
      </div>

  </div>
}

export default Navbar