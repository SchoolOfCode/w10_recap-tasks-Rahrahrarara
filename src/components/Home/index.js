import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import pigeons from "./pigeons.jpeg";
import css from "./home.module.css";

const Home = () => {
  return (
    <div>
      <Header />

      <Link to="articles">Articles</Link>

      <div className={css.background}>
        <img className={css.pigeonimage} src={pigeons} alt="pigeons" />
      </div>

      {/* Here I want the title of all articles displayed. When you click on a particular link of an article, it will take you to that article */}
    </div>
  );
};

export default Home;
