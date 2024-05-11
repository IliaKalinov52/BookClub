import axios from 'axios';
import React from 'react';

export default function LoginPage() {
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post('/api/auth/login', Object.fromEntries(new FormData(e.target)));
      if (response.status === 200) window.location = '/';
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const styleLoginPage = {
    backgroundColor: 'pink',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '150px',
    flexDirection: 'column',
    height: '100vh',
    margin: '0px',
  };
  const styleLoginBtn = {
    width: '100%',
  };

  return (
    <div style={styleLoginPage}>
      <form onSubmit={submitHandler}>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>

        <button style={styleLoginBtn} type="submit" className="btn btn-secondary">Login</button>
      </form>
    </div>
  );
}
