import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Shell from "../Shell";
import Recipe from "../Recipe";
import Trot from "../Trot";

import "./index.css";

import { fetchSeeds } from "../../app/state/seeds";

export function findElement(arr, slug) {
  return arr.find((item) => item.slug === slug);
}

const Main = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchSeeds());
  }, []);

  // Find the work that corresponds to the slug
  const work = findElement(store.Seeds.data, props.match.params.workSlug);
  if (!work) {
    return (
      <Shell>
        <h1>Work Not Found!</h1>
      </Shell>
    );
  }

  // Find the recipe that corresponds to the slug
  var recipe;
  if (work) {
    recipe = findElement(work.recipes, props.match.params.recipeSlug);
  }
  if (!recipe) {
    return (
      <Shell>
        <h1>Recipe Not Found!</h1>
      </Shell>
    );
  }

  return (
    <Shell>
      <h1>{recipe.title}</h1>

      <hr />
      <div>
        <div className="viewRecipe">
          <Recipe work={work} recipe={recipe} />
        </div>
        <div className="viewTrot">
          <Trot work={work} recipe={recipe} />
        </div>
      </div>
      <hr />
      <div>
        <h4>
          Excerpted from {work.title} by {work.author}
        </h4>
      </div>
    </Shell>
  );
};

export default Main;
