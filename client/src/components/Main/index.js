import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@material-ui/core";
import Link from "@material-ui/core/Link";

import Shell from "../Shell";

import "./index.css";

import { fetchSeeds } from "../../app/state/seeds";

const Main = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchSeeds());
  }, []);

  return (
    <Shell>
      <div className="Root">
        <ul>
          {store.Seeds.data.map((work) => {
            return (
              <div>
                {work.recipes.map((recipe) => {
                  return (
                    <li>
                      <Link href={"/view/" + work.slug + "/" + recipe.slug}>
                        {recipe.title} ({work.title} by {work.author})
                      </Link>
                    </li>
                  );
                })}
              </div>
            );
          })}
        </ul>
      </div>
    </Shell>
  );
};

export default Main;
