import { useState, useEffect } from "react";
// import Filter from "./Filter";
import "../blocks/recipeListGrid.css";
import Recipe from "./Recipe";
import maison from "../assets/images/MaisonBezalel.png";
import chicagoNews from "../assets/images/chicagoNews.svg";
import parksSparks from "../assets/images/parksSparks.png";
import helpingHands from "../assets/images/helpingHands.png";
import communiteeGolf from "../assets/images/communiteeGolf.png";
function RecipeList() {
  const recipes = [
    {
      image: maison,
      name: "Maison Bezalel (Work Contract)",
      link: "https://www.maisonbezalel.com/",
    },
    {
      image: communiteeGolf,
      name: `Communitee Golf (Externship)`,
      link: "https://github.com/tripleten-externships/communitee-golf-1",
    },
    {
      image: chicagoNews,
      name: "Tidings from Chicago (MVP Concept)",
      link: "https://christiansto.github.io/ChristianSTo-se-final-project/",
    },
    {
      image: parksSparks,
      name: "Parks Sparks (Code Jam)",
      link: "https://rpinkha.github.io/June-Code-Jam-2024/",
    },
    {
      image: helpingHands,
      name: "Project Helping Hands (Code Jam)",
      link: "https://christiansto.github.io/CTo-November-Code-Jam-2024/",
    },
  ];

  return (
    <div className="recipe-list_container">
      <ul className="recipe-list_grid">
        {recipes.map((recipe, index) => {
          return (
            <Recipe
              key={index}
              recipeImage={recipe.image}
              recipeName={recipe.name}
              recipeLink={recipe.link}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default RecipeList;
