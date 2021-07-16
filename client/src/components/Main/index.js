import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@material-ui/core";
import Link from "@material-ui/core/Link";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import Shell from "../Shell";

import "./index.css";

import { fetchSeeds } from "../../app/state/seeds";

const Main = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchSeeds());
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      float: "left",
      width: "500px",
      margin: "3rem",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 100,
      margin: "4px",
    },
  }));

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Shell>
      <div className="Root">
        <ul>
          {store.Seeds.data.map((work) => {
            console.log(work);
            return (
              <div>
                {work.recipes.map((recipe) => {
                  const viewRecipeUrl =
                    "/view/" + work.slug + "/" + recipe.slug;
                  return (
                    <Card link={viewRecipeUrl} className={classes.root}>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Link href={viewRecipeUrl}>
                            <Typography component="h5" variant="h5">
                              {recipe.title}
                            </Typography>
                          </Link>

                          <Typography variant="subtitle1" color="textSecondary">
                            {work.title}
                          </Typography>
                        </CardContent>
                      </div>
                      <CardMedia
                        className={classes.cover}
                        image={work.cover_url}
                        title="Work cover"
                      />
                    </Card>
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
