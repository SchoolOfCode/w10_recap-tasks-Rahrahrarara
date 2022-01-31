import React from "react";
import css from "./article.module.css";

const Article = ({ title, paragraph }) => {
  return (
    <div className={css.container}>
      <h2> {title} </h2>
      <p> {paragraph} </p>
    </div>
  );
};

export default Article;
