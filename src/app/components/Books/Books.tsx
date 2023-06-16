import React from 'react';
import Book from './Book';
import { BooksStyles } from './BookStyles';

const URL_PREFIX = 'book_images/';

const Books = ({ list, onFavoriteClick }) => {
  return (
    <div className="books-wrapper">
      <div className="tier">
        <div className="tier-books">
          {list.map((book, index) => (
            <Book
              key={index}
              id={book.id}
              name={book.name}
              labels={book.labels}
              favorite={book.favorite}
              img={URL_PREFIX + book.img}
              series={book.series}
              author={book.author}
              rating={book.rating}
              goodreads_link={book.goodreads_link}
              visible={book.visible}
              favoriteClick={onFavoriteClick}
            />
          ))}
        </div>
      </div>
      <BooksStyles />
    </div>
  );
};

export default Books;
