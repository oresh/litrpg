import Books from 'app/components/Books/Books';
import Filters from 'app/components/Filters/Filters';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import bookList from '../../../store/books.json';

export function HomePage() {
  return (
    <div className="collection-wrapper">
      <Filters />
      <Books list={bookList} />
    </div>
  );
}

export default HomePage;
