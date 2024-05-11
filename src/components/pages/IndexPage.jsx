import axios from 'axios';
import React, { useState } from 'react';

export default function IndexPage({ quote }) {
  const [randomQuote, setQuote] = useState(quote);
  const changeHandler = async () => {
    const response = await axios('/api/random');
    setQuote(response.data.quote);
    console.log(randomQuote);
  };

  const styleCard = {
    display: 'flex', alignItems: 'center', backgroundColor: 'pink', borderWidth: '0', justifyContent: 'space-between',
  };
  const styleImg = { width: '800px', height: '533px', marginTop: '50px' };
  const styleText = {
    alignItems: 'center', width: '800px', marginTop: '20px', paddingLeft: '0px',
  };
  const styleAll = {
    display: 'flex', backgroundColor: 'pink', height: '100vh', justifyContent: 'space-evenly',
  };
  const styleQuote = { width: '400px', marginTop: '50px' };

  return (
    <div className="all" style={styleAll}>
      <div className="card" style={styleCard}>
        <img style={styleImg} src="https://alterainvest.ru/upload/iblock/94a/94ab88994811c1359f63bb9c6613f62d.jpg" className="card-img-top" alt="mainImg" />
        <div className="card-body" style={styleText}>
          <h5 className="card-title">Book club</h5>
          <p className="card-text">Together we choose important and interesting things on the bookshelf. We discuss everything that inspires, excites and surprises on the pages of books. We can talk not only about psychologism, but also about the ascendant and karmic debt.</p>
        </div>
      </div>
      <div className="Quote" style={styleQuote}>
        <h2>Random Quote:</h2>
        <p>{randomQuote.content}</p>
        <p>{randomQuote.author}</p>
        <p>{randomQuote.bookName}</p>
        <button type="button" className="btn btn-secondary" onClick={changeHandler}>Get Random Quote</button>
      </div>
    </div>
  );
}
