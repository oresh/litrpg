import * as React from 'react';

const Book = ({
  id,
  name,
  labels,
  img,
  series,
  author,
  goodreads_link,
  rating,
  favorite,
  visible,
  favoriteClick,
}) => {
  return (
    <div
      className="book"
      data-name={name}
      data-visible={visible.toString()}
      data-labels={labels}
      data-rating={rating}
      data-favorite={favorite}
      data-id={id}
    >
      <img src={img} alt="" className="book-cover" />
      <span
        className={`book-favorite ${favorite ? 'is-favorite' : ''}`}
        onClick={favoriteClick.bind(null, id)}
      ></span>
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
