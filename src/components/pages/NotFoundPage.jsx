import React from 'react';

export default function NotFoundPage() {
  const stylePage = {
    backgroundColor: 'pink',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '150px',
    flexDirection: 'column',
    height: '100vh',
    margin: '0px',
  };
  return (
    <div style={stylePage}>
      <h1>NotFoundPage</h1>
      <a href="/">Go home</a>
    </div>
  );
}
