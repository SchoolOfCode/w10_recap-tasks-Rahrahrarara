import React from "react";
import Article from "../Article";
import articles from "../../libs/articles";
import LikeButton from "../LikeButton";
import css from "./articledisplay.module.css";
import { Link } from "react-router-dom";

const ArticleDisplay = () => {
  return (
    <div className={css.container}>
      <Link to="/">Home page </Link>

      {articles.map((article) => {
        return (
          <div key={article.id}>
            <Article
              title={article.title}
              paragraph={article.paragraphs.map((paragraph) => {
                return <p key={paragraph.id}>{paragraph.text}</p>;
              })}
            />

            <LikeButton />
          </div>
        );
      })}
    </div>
  );
};

export default ArticleDisplay;
