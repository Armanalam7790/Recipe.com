import { nanoid } from 'nanoid'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Create = () => {
 const navigate  = useNavigate()
const {data,setdata}  = useContext(recipecontext)
 const {register,handleSubmit,reset}  =  useForm();

 const submitHandler = (recipe)=>{
    recipe.id = nanoid()
    // console.log(recipe);
    setdata([...data,recipe])
    toast.success("New Recipe Add!")
  reset()
  navigate('/recipe')
 }
  return (
    <div>
        <form onSubmit={ handleSubmit(submitHandler)}>
            <input
            className='border-b outline-0 p-2 block'
             {...register('image')} type="url" placeholder='Image' />
        <small className='text-red-400'>xyz</small>
            
             <input
            className='border-b outline-0 p-2 block'
             {...register('title')} type="text" placeholder='Title' />

              <input
            className='border-b outline-0 p-2 block'
             {...register('chef')} type="text" placeholder='chef name' />

           <textarea
            className='border-b outline-0 p-2 block'
             {...register('desc')}  placeholder='// start from here' ></textarea>

             <textarea
            className='border-b outline-0 p-2 block'
             {...register('ingr')}  placeholder='// write ingredients seperated by comma' ></textarea>

          <textarea
            className='border-b outline-0 p-2 block'
             {...register('inst')}  placeholder='// write instructions seperated by comma' ></textarea>

             
          <select
            className='border-b outline-0 p-2 block'
             {...register('category')}  >
                <option value="break-fast">break</option>
                <option value="lunch">lunch</option>
                <option value="dinner">dinner</option>
                <option value="supper">supper</option>

                
             </select>


             <button className='block mt-5 px-4 py-2 rounded bg-gray-900'>save recipe</button>
             

        </form>
    </div>
  )
}

export default Create