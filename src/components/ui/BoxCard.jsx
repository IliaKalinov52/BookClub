import React from 'react';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function BoxCard({ box }) {
  const addToCart = async () => {
    const response = await axios.post(`/shop/${box.id}`);
    if (response.status === 200) {
      Notify.success(`${box.title} added to cart`);
    }
    // alert(`You have added ${box.title} to your shopping cart`);
  };
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-3">
          <img src={box.img} className="img-fluid rounded-start" alt="giftbox" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{box.title}</h5>
            <p className="card-text">{box.description}</p>
            <p className="card-text">
              <button onClick={addToCart} type="button" label="cartbutton" className="btn btn-success">
                <small style={{ color: 'whitesmoke' }} className="text-body-secondary">{`$${box.price}`}</small>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
