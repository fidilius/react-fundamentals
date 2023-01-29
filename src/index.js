import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import books from "./books";
import Book from "./Book";

function BookList() {
  return (
    <>
      <h2 className="title">amazon best sellers</h2>
      <section className="booklist">
        {books.map((book, i) => {
          return (
            <Book key={book.id} number={i} {...book} />
          );
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<BookList />);
