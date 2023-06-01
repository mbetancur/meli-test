import React from 'react';
import SearchItem from '../components/SearchItem';

const SearchResults = ({ results }) => {
  return (
    <div className="main-page__results">
      {results.map((item) => (
        <SearchItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SearchResults;
