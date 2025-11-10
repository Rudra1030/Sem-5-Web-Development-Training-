import React from "react";
import "./Book.css";

function Book({ title, subject, image }) {
  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Subject: {subject}</p>
      <button>View Details</button>
    </div>
  );
}

export default Book;
