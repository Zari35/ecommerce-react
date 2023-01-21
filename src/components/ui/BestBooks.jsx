import { books } from "../../data";
import React from "react";
import Book from "../Book";

const BestBooks = ({ id }) => {
  return (
    <div className="books">
      {books
        .filter((book) => {
          if (id) {
            return book.rating === 5 && book.id != id;
          }
          return book.rating === 5;
        })
        .slice(0, 4)
        .map((book) => {
          return <Book book={book} key={book.id} />;
        })}
    </div>
  );
};

export default BestBooks;
