import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipe = () => {
  const { data } = useContext(recipecontext);
  const randerecipe = data.map((recipe) => (
   <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return <div className="flex flex-wrap gap-6 px-20 pt-24">{data.length > 0 ? randerecipe : "No recipe found:"}</div>;
};

export default Recipe;
