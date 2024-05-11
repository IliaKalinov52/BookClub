import React, { useState } from 'react';
import AddBookForm from '../ui/AddBookForm';

export default function AddBookPage({ books }) {
  const [allBooks, setAllBooks] = useState(books);
  const [input, setInput] = useState({
    title: '', author: '', img: '', month: '',
  });

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/monthbook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(input),
    });

    if (response.ok) {
      const data = await response.json();
      setAllBooks((prev) => [data, ...prev]);
      setInput({
        title: '', author: '', img: '', month: '',
      });
      setTimeout(() => {
        window.location.href = '/monthbook';
      }, 1000);
    }
  };
  return (
    <div>
      <AddBookForm input={input} inputHandler={inputHandler} submitHandler={submitHandler} />
    </div>
  );
}
