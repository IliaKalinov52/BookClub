import React from 'react';

export default function OneBook({ book, deleteHandler, user }) {
  return (
    <div className="card mt-3" style={{ width: '18rem', marginTop: '10px' }}>
      <img src={book.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">{book.title}</h5>
        <h4 className="card-text text-center">{book.author}</h4>
        <div style={{ backgroundColor: 'yellow', textAlign: 'center' }} className="text-dark p-2 mb-2">
          <h4 className="card-text m-0">{book.month}</h4>
        </div>

        {user && user.isAdmin ? (
          <a href={`/addbook/change/${book.id}`} className="btn btn-primary">Edit</a>
        ) : null}

        {user && user.isAdmin ? (
          <button onClick={() => deleteHandler(book.id)} className="btn btn-danger">Delete</button>
        ) : null}
      </div>
    </div>
  );
}
