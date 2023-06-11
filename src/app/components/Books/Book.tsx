import * as React from 'react';

const Book = ({
  name,
  labels,
  img,
  series,
  author,
  goodreads_link,
  rating,
}) => {
  return (
    <div
      className="book"
      data-name={name}
      data-visible={'true'}
      data-labels={labels}
      data-rating={rating}
    >
      <img src={img} alt="" className="book-cover" />
      <div className="book-hint">
        {series && <p className="book-series">{series}</p>}
        <p className="book-name">{name}</p>
        <p className="book-author">{author}</p>
        <a href={goodreads_link} className="book-link">
          Goodreads
        </a>
      </div>
    </div>
  );
};

export default Book;
