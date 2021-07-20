import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const extensionLabels = {
  js: "JavaScript",
  py: "Python",
  go: "Go",
  ts: "TypeScript",
  java: "Java",
  txt: "Text",
};

const Main = (props) => {
  const [extension, setExtension] = useState(props.recipe.extensions[0]);
  const [recipeText, setRecipeText] = useState("Program");

  useEffect(() => {
    const fetchProgram = async () => {
      const url =
        "/seeds/" + props.work.slug + "/" + props.recipe.slug + "." + extension;
      console.log(url);
      const response = await fetch(url);
      const prog = await response.text();
      if (!prog.err) {
        setRecipeText(prog);
      } else {
        setRecipeText("Can't find that language.");
      }
    };
    fetchProgram();
  }, [extension]);

  return (
    <div>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        {props.recipe.extensions.map((ext) => {
          const label = extensionLabels[ext] || ext;
          // Return the languages; bold the language that is selected
          return (
            <Button key={ext} onClick={() => setExtension(ext)}>
              {ext == extension ? <b>{label}</b> : label}
            </Button>
          );
        })}
      </ButtonGroup>
      <SyntaxHighlighter language={extension} style={docco}>
        {recipeText}
      </SyntaxHighlighter>
    </div>
  );
};

export default Main;
