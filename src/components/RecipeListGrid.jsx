import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import Filter from "./Filter";
import "../blocks/recipeListGrid.css";
import Recipe from "./Recipe";
import { recipes } from "../data/recipes";

function RecipeList() {
  return (
    <div className="recipe-list_container">
      <ul className="recipe-list_grid">
        {recipes.map((recipe, index) => {
          return (
            <Recipe
              key={recipe.name}
              recipeImage={recipe.image}
              recipeName={recipe.name}
              recipeLink={recipe.link}
              recipeGitHub={recipe.github}
              recipeDescription={recipe.description}
              recipeGallery={recipe.gallery}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default RecipeList;
