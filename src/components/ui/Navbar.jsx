import axios from 'axios';

import React from 'react';

export default function Navbar({ user }) {
  const styleNavBar = {
    display: 'flex', justifyContent: 'space-between', marginLeft: '70px', marginRight: '700px',
  };

  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios('/api/auth/logout');
      if (response.status === 200) window.location = '/';
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-0">
      <div className="container-fluid">

        <div className="collapse navbar-collapse" id="navbarNav" style={styleNavBar}>
          <a className="navbar-brand" href="/">Home</a>
          <a className="nav-link active" aria-current="page" href="/monthbook">Book of the month</a>
          {user && user.isAdmin && (
            <a className="nav-link active" aria-current="page" href="/addbook">Add book</a>
          )}

          {!user ? (
            <>
              <a className="nav-link active" href="/auth/login">Login</a>
              <a className="nav-link active" href="/auth/signup">Sign up</a>
            </>
          ) : (
            <>
              <a className="nav-link" href="/shop">Shop</a>
              <a className="nav-link" href="/events">Events</a>

              <a className="nav-link active" onClick={logoutHandler}>Logout</a>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}
