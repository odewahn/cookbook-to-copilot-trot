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
        <Button
          variant="contained"
          onClick={() => {
            dispatch(fetchSeeds());
          }}
        >
          Click me!
        </Button>
        <hr />
        <ul>
          {store.Seeds.data.map((work) => {
            return (
              <div>
                {work.recipes.map((recipe) => {
                  return (
                    <li>
                      <Link href={"/view/" + work.slug + "/" + recipe.slug}>
                        {recipe.title}
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
