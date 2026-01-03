import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return <div className=' p-4 flex justify-center gap-8 text-sm capitalize mb-5'>

    <NavLink className={(e)=> e.isActive ? "text-red-400": " "  } to='/' >home</NavLink>
    <NavLink className={(e)=> e.isActive ? "text-red-400": " "  } to='/about' >about</NavLink>
    <NavLink className={(e)=> e.isActive ? "text-red-400": " " } to='/recipe' >recipe</NavLink>

    <NavLink className={(e)=> e.isActive ? "text-red-400": " "  } to='/create-recipe' >create</NavLink>

  </div>
}

export default Navbar