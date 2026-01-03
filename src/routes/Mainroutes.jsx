import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipe from '../pages/Recipe'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'

const Mainroutes = () => {
  return <Routes>
    <Route path='/' element={<Home />}  >home</Route>
    <Route path='/about' element={<About />}  >home</Route>

    <Route path='/recipe' element={<Recipe />}  >home</Route>
    <Route path='/recipe/detail/:id' element={<SingleRecipe />}  >home</Route>

    <Route path='/create-recipe' element={<Create />}  >Create</Route>
    
      


  </Routes>
}

export default Mainroutes