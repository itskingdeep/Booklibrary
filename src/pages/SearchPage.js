import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 2) {
      axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then((response) => {
          setResults(response.data.docs);
        });
    }
  }, [query]);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <SearchResults results={results} addToBookshelf={addToBookshelf} />
      <button onClick={() => navigate('/bookshelf')}>Go to My Bookshelf</button>
    </div>
  );
};

export default SearchPage;
