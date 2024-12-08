
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return ( 
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Routes>
      <Route path="/about" element={<About />}/>
      <Route path="/" element={<Home />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
