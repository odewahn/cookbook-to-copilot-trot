import React, { useState, useEffect } from "react";

import DOMPurify from "dompurify";
import { Helmet } from "react-helmet";

const marked = require("marked");

const Main = (props) => {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");

  // Load the markdown for the given recipe
  useEffect(() => {
    const fetchHTML = async () => {
      const url = "/seeds/" + props.work.slug + "/" + props.recipe.slug + ".md";
      console.log(url);
      const response = await fetch(url);
      const md = await response.text();
      if (!md.err) {
        setMarkdown(md);
      }
    };
    fetchHTML();
  }, [props.work.slug, props.recipe.slug]);

  // Convert the markdown into HTML
  useEffect(() => {
    // Safely convert the markdown content to HTML
    var convertedHTML = marked(markdown);
    var clean = DOMPurify.sanitize(convertedHTML); // Sanitize it, too...
    setHtml(clean);
  }, [markdown]);

  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://learning.oreilly.com/files/public/epub-reader/override_v1.css"
          media="screen"
        />
      </Helmet>
      <div id="book-content">
        <div id="sbo-rt-content">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  );
};

export default Main;
