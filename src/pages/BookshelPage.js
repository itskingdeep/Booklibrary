import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Bookshelf from '../components/BookShelf';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);
  const navigate = useNavigate();

  useEffect(() => {
    setBookshelf(JSON.parse(localStorage.getItem('bookshelf')) || []);
  }, []);

  return (
    <div>
      <Bookshelf bookshelf={bookshelf} />
      <button onClick={() => navigate('/')}>Back to Search</button>
    </div>
  );
};

export default BookshelfPage;
