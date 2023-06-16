import Books from 'app/components/Books/Books';
import Filters from 'app/components/Filters/Filters';
import Sort from 'app/components/Sort/Sort';
import * as React from 'react';
import bookList from '../../../store/books.json';

const ls = require('local-storage');

export enum FiltersList {
  litrpg = 'LitRPG',
  gamelit = 'Gamelit',
  progression = 'Progression',
  vr = 'VR',
  system = 'the System',
  humour = 'Humour',
  nonhumanmc = 'Non-human MC',
  completed = 'Completed',
  ongoing = 'Ongoing',
  femalemc = 'Female MC',
  isekai = 'Isekai',
  overpowered = 'Overpowered MC',
  mage = 'Mage',
  fighter = 'Fighter',
  rogue = 'Rogue',
  noncombat = 'Non-combat MC',
  guns = 'Guns',
  solo = 'Solo Adventurer',
  party = 'Party of Adventurers',
}

export enum SortList {
  rating = 'By Rating',
  name = 'By Name',
  id = 'By First Release Date',
}

const containsArray = function (arr: Array<String>, match: Array<String>) {
  if (match.length == 0) return true;
  for (var i = 0; i < match.length; i++) {
    if (arr.indexOf(match[i]) === -1) return false;
  }
  return true;
};

const sortArrByObjectByAttribute = function (
  arr: Array<Object>,
  attr: PropertyKey,
) {
  if (arr.length == 0 || arr.length == 1) return arr;
  if (!arr[0].hasOwnProperty(attr)) return arr;
  const newArr = arr.sort(function (a, b) {
    return a[attr] - b[attr];
  });
};

export function HomePage() {
  const [initialised, setInitialised] = React.useState<any>(false);
  const [books, setBooks] = React.useState<any>([]);
  const [filters, setFilters] = React.useState<any>([]);
  const [sorting, setSort] = React.useState<any>([]);
  const [favorites, setFavorites] = React.useState<any>([]);

  React.useEffect(() => {
    setBooks(
      bookList.map(book => ({ ...book, visible: true, favorite: false })),
    );
    setFilters(
      ls.get('filters') ||
        Object.keys(FiltersList).map(filter_name => ({
          selected: false,
          name: FiltersList[filter_name],
          slug: filter_name,
        })),
    );
    setSort(
      ls.get('sorting') ||
        Object.keys(SortList).map(sorting_name => ({
          selected: sorting_name == 'rating',
          name: SortList[sorting_name],
          slug: sorting_name,
        })),
    );
    setFavorites(ls.get('favorites') || []);
    setInitialised(true);
  }, []);

  const onFilterClick = (filter, event) => {
    event.preventDefault();
    const newFilters = filters.map(item => {
      if (item.name === filter.name) {
        item.selected = !item.selected;
      }
      return item;
    });
    ls.set('filters', newFilters);
    setFilters(newFilters);
  };

  const onSortClick = (sort, event) => {
    event.preventDefault();
    const newSort = sorting.map(item => {
      item.selected = item.name === sort.name;
      return item;
    });
    ls.set('sorting', newSort);
    setSort(newSort);
  };

  const onFavoriteClick = (book_id, event) => {
    event.preventDefault();
    const ind = favorites.indexOf(book_id);
    const newFavorites = [...favorites];
    let is_favorite = false;
    if (ind == -1) {
      newFavorites.push(book_id);
      is_favorite = true;
    } else {
      newFavorites.splice(ind, 1);
    }

    ls.set('favorites', newFavorites);

    setFavorites(newFavorites);
  };

  React.useEffect(() => {
    if (initialised) {
      const appliedFilters = filters
        .filter(filter => filter.selected)
        .map(filter => filter.slug);

      const activeSort = sorting.filter(filter => filter.selected);
      const sortAttr = activeSort.length ? activeSort[0].slug : 'rating';
      let newBooks = [...books];

      if (sortAttr == 'rating' || sortAttr == 'id') {
        newBooks = books.sort((a, b) => b[sortAttr] >= a[sortAttr]);
      }
      if (sortAttr == 'name') {
        newBooks = books.sort((a, b) => a[sortAttr] >= b[sortAttr]);
      }

      newBooks = newBooks.map(book => {
        const is_favorite = favorites.indexOf(book.id) !== -1;
        if (appliedFilters.length === 0) {
          return { ...book, visible: true, favorite: is_favorite };
        }
        const isVisible = containsArray(book.labels.split(' '), appliedFilters);
        return { ...book, visible: isVisible, favorite: is_favorite };
      });
      setBooks(newBooks);
    }
  }, [filters, favorites, sorting, initialised]);

  return (
    <div className="collection-wrapper">
      <Filters filters={filters} onFilterClick={onFilterClick} />
      <Sort sorting={sorting} onSortClick={onSortClick} />
      <Books list={books} onFavoriteClick={onFavoriteClick} />
    </div>
  );
}

export default HomePage;
