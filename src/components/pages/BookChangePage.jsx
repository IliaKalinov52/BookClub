import React from 'react';
import axios from 'axios';
import EditBookForm from '../ui/EditBookForm';

export default function BookChangePage({ editBook }) {
  const editHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    try {
      await axios.put(`/api/monthbook/${editBook.id}`, formData);
      window.location = '/monthbook';
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <>
      <h3>Edit:</h3>
      <EditBookForm editBook={editBook} editHandler={editHandler} />
    </>
  );
}
