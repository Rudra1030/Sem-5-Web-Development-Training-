import React from "react";
import "./App.css";
import Book from "./component/Book/index.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <h1>📚 Book Haven</h1>
          <ul>
            <li>Home</li>
            <li>Subjects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <div className="book-section">
                <Book
                  title="Physics for Beginners"
                  subject="Physics"
                  image="https://m.media-amazon.com/images/I/51eQW7F7N8L.jpg"
                />
                <Book
                  title="Mathematics Simplified"
                  subject="Maths"
                  image="https://m.media-amazon.com/images/I/61Nf2bRjSDL.jpg"
                />
                <Book
                  title="World History Essentials"
                  subject="History"
                  image="https://m.media-amazon.com/images/I/51z+5MB1pDL.jpg"
                />
                <Book
                  title="Introduction to Programming"
                  subject="Computer Science"
                  image="https://m.media-amazon.com/images/I/51FjK9bKwbL.jpg"
                />
              </div>
            }
          />
          <Route path="*" element={<div style={{ textAlign: 'center', marginTop: '50px' }}>Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
