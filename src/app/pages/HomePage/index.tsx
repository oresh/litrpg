import Books from 'app/components/Books/Books';
import Filters from 'app/components/Filters/Filters';
import * as React from 'react';
import bookList from '../../../store/books.json';
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
}

const containsArray = function (arr: Array<String>, match: Array<String>) {
  if (match.length == 0) return true;
  for (var i = 0; i < match.length; i++) {
    if (arr.indexOf(match[i]) === -1) return false;
  }
  return true;
};

export function HomePage() {
  const [initialised, setInitialised] = React.useState<any>(false);
  const [books, setBooks] = React.useState<any>([]);
  const [filters, setFilters] = React.useState<any>([]);


  React.useEffect(() => {
    setBooks(bookList.map( (book) => ({...book, visible: true})));
    setFilters(Object.keys(FiltersList).map(filter_name => ({selected:false, name: FiltersList[filter_name], slug: filter_name})));
    setInitialised(true);
  }, []);

  const onFilterClick = (filter, event) => {
    event.preventDefault();
    const newFilters = filters.map(item => {
      if(item.name === filter.name) {
        item.selected = !item.selected; 
      }
      return item;
    });
    setFilters(newFilters)
  }

  React.useEffect(() => {
    if(initialised) {
      const appliedFilters = filters.filter(filter => filter.selected).map(filter => filter.slug);
      const newBooks = books.map(book => {
        if(appliedFilters.length === 0){
          return {...book, visible:true}
        }
        const isVisible = containsArray(book.labels.split(' '), appliedFilters);
        return {...book, visible:isVisible};
      });
      setBooks(newBooks);
    }

  }, [filters, initialised]);
  

  return (
    <div className="collection-wrapper">
      <Filters filters={filters} onFilterClick={onFilterClick}/>
      <Books list={books} />
    </div>
  );
}

export default HomePage;
