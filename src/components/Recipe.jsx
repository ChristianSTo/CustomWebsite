import React, { useState, useEffect, useRef } from "react";
import "../blocks/recipe.css";

function Recipe({ recipeImage, recipeName, recipeLink }) {
  return (
    <a className="recipe__item" href={recipeLink} target="blank_">
      <img
        className="recipe-list__image"
        src={recipeImage}
        alt={recipeName}
      ></img>
      <p className="recipe-list__title">{recipeName} </p>
    </a>
  );
}

export default Recipe;
