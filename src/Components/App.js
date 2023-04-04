import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import style from "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import HardCodeBlog from "../Pages/HardCodeBlog";
import Blog from "../Pages/Blog";
import Post from "./Post";

const App = function () {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<HardCodeBlog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
