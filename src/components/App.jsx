import React from 'react';
import Navbar from './ui/Navbar';

export default function App({ children, user }) {
  return (
    <div>
      <Navbar user={user} />
      {children}
    </div>
  );
}
