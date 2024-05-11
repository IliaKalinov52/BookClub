import React from 'react';

export default function EditBookForm({ editBook, editHandler }) {
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={(event) => editHandler(event)}>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Title
            <input
              name="text"
              type="text"
              className="form-control"
              id="inputTitle"
              defaultValue={editBook.title}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Author
            <input
              name="author"
              type="text"
              className="form-control"
              id="inputAuthor"
              defaultValue={editBook.author}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Month
            <input
              name="month"
              type="text"
              className="form-control"
              id="inputMonth"
              defaultValue={editBook.month}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Img
            <input
              name="img"
              type="text"
              className="form-control"
              id="inputImg"
              defaultValue={editBook.img}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}
