import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const SingleRecipe = () => {
const {data,setdata}  = useContext(recipecontext)
   const navigate  = useNavigate()
    const params = useParams()
 const recipe =  data.find(recipe => params.id == recipe.id)

 const {register,handleSubmit,reset}  =  useForm({defaultValues:{
  title: recipe.title,
  chef: recipe.chef,
  image:recipe.image,
  inst:recipe.inst,
  desc:recipe.desc,
  ingr:recipe.ingr,
  category:recipe.category
 }});

 const submitHandler = (recipe)=>{

  const index =  data.findIndex(recipe => params.id == recipe.id)
  //  console.log(index);
   const copydata  = [...data]
   copydata[index] = {...copydata[index], ...recipe}
   setdata(copydata)
   toast.success('recipe updated')
   

 }

//  const {data} =  useContext(recipecontext)
 
 

//  console.log(recipe);
 
 const deletHandler = ()=>{
      const filterdata = data.filter(r => r.id != params.id)
      setdata(filterdata)
      toast.success('recipe deleted')
      navigate('/recipe')
 }

   useEffect(()=>{
        console.log('singlerecipe.jsx mounred');
        // getproduct()
        return ()=>{
          console.log('home.jsx unmount');
          
        }
        
    },[])

  return (
   recipe ? <div className='w-full flex'>
    <div className=" w-1/2  left  p-2">
      <h1 className='text-5xl font-black'>{recipe.title}</h1>
      <img
      className='w-[20vh]'
      src={recipe.image} alt="" />
      <h1>{recipe.chef}</h1>
      <p>{recipe.desc}</p>
    </div>

     <form
     className='w-1/2  right  p-2"'
     onSubmit={ handleSubmit(submitHandler)}>
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


             <button className='block mt-5 px-4 py-2 rounded bg-blue-900'>update recipe</button>
             
              <button onClick={deletHandler} className='block mt-5 px-4 py-2 rounded bg-red-900'>delete recipe</button>

        </form>
    
    
   </div> : "loading..."
  )
}

export default SingleRecipe