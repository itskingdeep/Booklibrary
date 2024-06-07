import React from 'react';
import BookCard from './BookCard';

const SearchResults = ({ results, addToBookshelf }) => {
  return (
    <div className="search-results">
      {results.map((book) => (
        <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
      ))}
    </div>
  );
};

export default SearchResults;
