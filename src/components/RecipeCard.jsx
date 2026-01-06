import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
    const {id,image,title,desc,chef} = props.recipe
  return (
    <Link 

    to={`/recipe/detail/${id}`}

     className='block w-[20vw] rounded overflow-hidden shadow mr-3 mb-3 hover:scale-101 duration-150 '>
        <img className='w-full h-[20vh] object-cover' src={image} alt="" />
        <h1 className='px-2 mt-3 font-black '>{title}</h1>
        <small className='px-2 text-red-500'>{chef}</small>
        <p className='px-2 pb-2'>{desc.slice(0,100)}... <small className='text-blue-400'>more</small></p>

    </Link>
  )
}

export default RecipeCard