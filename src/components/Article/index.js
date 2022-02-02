import React from "react";
import css from "./article.module.css";
import { useParams } from "react-router-dom";
import articles from "../../libs/articles";

const Article = () => {
  const { id } = useParams();
  const article = articles.find((element) => element.id.toString() === id);
  console.log(article);

  if (!article) {
    return <p> Article not found</p>;
  }
  return (
    <div className={css.container}>
      <h2> {article.title} </h2>
      {article.paragraphs.map((paragraph) => {
        return <p key={paragraph.id}>{paragraph.text}</p>;
      })}
      {/* <p> {paragraph} </p> */}
    </div>
  );
};

export default Article;
