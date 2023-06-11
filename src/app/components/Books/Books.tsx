import React from 'react';
import Book from './Book';
import { BooksStyles } from './BookStyles';

const Books = ({ list }) => {

  return (
    <div className="books-wrapper">
      <div className="tier">
        <div className="tier-books">
          {list.map((book, index) => (
            <Book
              key={index}
              name={book.name}
              labels={book.labels}
              img={book.img}
              series={book.series}
              author={book.author}
              rating={book.rating}
              goodreads_link={book.goodreads_link}
              visible={book.visible}
            />
          ))}
        </div>
      </div>
      <BooksStyles />
    </div>
  );
};

export default Books;
