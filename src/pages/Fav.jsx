// import React, { useContext } from "react";
// import RecipeCard from "../components/RecipeCard"


// const Fav = () => {
//   const favroite = JSON.parse(localStorage.getItem("fav") || [] )
//   const randerecipe = favroite.map((recipe) => (
//     <RecipeCard key={recipe.id} recipe={recipe} />
//   ));

//   return (
//     <div className="flex flex-wrap gap-5">
//       {favroite.length > 0 ? randerecipe : "No favroiteyy found:"}
//     </div>
//   );
// };

// export default Fav;

import React from "react";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const favroite = JSON.parse(localStorage.getItem("fav") || "[]");
  const randerecipe = favroite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="flex flex-wrap gap-5 px-30 pt-24">
      {favroite.length > 0 ? randerecipe : "No favorites found"}
    </div>
  );
};

export default Fav;
