import React from 'react';

export default function AddBookForm({ input, inputHandler, submitHandler }) {
  const addBookStyle = {
    backgroundColor: 'pink',
    margin: '0px',
    paddingTop: '50px',
    display: 'flex',
    alignItem: 'center',
    height: '100vh',
  };
  const styleButton = {
    width: '203px',
  };
  return (
    <div className="d-flex justify-content-center" style={addBookStyle}>

      <form onSubmit={(event) => submitHandler(event)}>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Title
            <input
              name="title"
              type="text"
              className="form-control"
              id="inputTitle"
              value={input.title}
              onChange={inputHandler}
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
              value={input.author}
              onChange={inputHandler}
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
              value={input.month}
              onChange={inputHandler}
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
              id="inputImng"
              value={input.img}
              onChange={inputHandler}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-secondary" style={styleButton}>Add</button>
      </form>

    </div>
  );
}
