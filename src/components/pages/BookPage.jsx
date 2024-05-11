import React, { useState } from 'react';
import axios from 'axios';
import OneBook from './OneBook';

export default function BookPage({ user, books, latestBook }) {
  const [allBooks, setAllBooks] = useState(books);
  const [lastBook, setLastBook] = useState(latestBook);

  const deleteHandler = async (id) => {
    await axios.delete(`/api/monthbook/${id}`);
    setAllBooks((prev) => prev.filter((el) => el.id !== id));
  };
  return (

    <div className="row d-flex justify-content-center" style={{ marginTop: '40px' }}>
      <h3 className="text-center font-weight-bold">BOOK OF THE MONTH:</h3>
      <OneBook key={lastBook.id} book={lastBook} />
      <h3 className="text-center font-weight-bold">OUR PICKS:</h3>
      {allBooks?.map((el) => <OneBook user={user} key={el.id} book={el} deleteHandler={deleteHandler} />)}
    </div>

  );
}
