import ArticleDisplay from "../ArticleDisplay";
import Home from "../Home";
import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="articles" element={<ArticleDisplay />} />
          {/* <Route path="contact" element={<Contact />} /> */}
        </Routes>
      </nav>
    </main>
  );
}

export default App;
