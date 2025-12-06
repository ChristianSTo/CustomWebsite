import React, { useState, useEffect, useRef } from "react";
import "../blocks/recipe.css";
import SiteInfo from "./SiteInfo";
function Recipe({ recipeImage, recipeName, recipeLink, recipeDescription }) {
  const [openInfo, setOpenInfo] = useState(false);

  const toggleSiteInfo = () => {
    if (!openInfo) {
      setOpenInfo(true);
    } else {
      setOpenInfo(false);
    }
  };

  return (
    <>
      <button className="recipe__item" onClick={toggleSiteInfo}>
        <img
          className="recipe-list__image"
          src={recipeImage}
          alt={recipeName}
        ></img>
        <p className="recipe-list__title">{recipeName} </p>
      </button>
      {openInfo && (
        <SiteInfo
          recipeImage={recipeImage}
          recipeName={recipeName}
          recipeLink={recipeLink}
          recipeDescription={recipeDescription}
          toggleSiteInfo={toggleSiteInfo}
        />
      )}
    </>
  );
}

export default Recipe;
