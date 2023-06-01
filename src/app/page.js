"use client"
import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import searchItems from './services/searchItems';
import Navbar from './components/Navbar'
import "./page.css"

const Page = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await searchItems(query);
      setResults(data.results.slice(0, 4)); // TODO Limit to 4 items in the API fetch
    } catch (error) {
      console.error(error);
      // TODO handle error with Next error feature
    }
  };

  return (
    <main className="main-page">
      <Navbar>
        <SearchForm
          query={query}
          handleQueryChange={handleQueryChange}
          handleSearch={handleSearch}
        />
      </Navbar>
      <SearchResults results={results} />
    </main>
  );
};

export default Page;
