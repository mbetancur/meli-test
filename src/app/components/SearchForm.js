import React from 'react';
import Image from 'next/image';
import "./styles/SearchForm.css";

const SearchForm = ({ query, handleQueryChange, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Nunca dejes de buscar"
        className="search-input"
      />
      <button type="submit" className="search-button">
        <Image src="/search.png" alt="Button Icon" className="button-icon" width="30" height="30" />
      </button>
    </form>
  );
};

export default SearchForm;
