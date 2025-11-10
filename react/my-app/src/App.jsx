import React from "react";
import "./App.css";
import Book from "./component/Book/index.jsx";

function App() {
  return (
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
    </div>
  );
}

export default App;
