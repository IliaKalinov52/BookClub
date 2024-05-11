import React from 'react';
import axios from 'axios';

export default function CardItem({ item, setArr }) {
  const removeFromCart = async () => {
    const response = await axios.delete(`cart/${item.id}`);
    if (response.status === 200) {
      setArr((prev) => {
        const index = prev.findIndex((el) => el.id === item.id);
        if (index !== -1) {
          return [...prev.slice(0, index), ...prev.slice(index + 1)];
        }
        return prev;
      });
    }

    console.log(response, setArr);
  };

  return (
    <div className="d-flex align-items-center mb-5">
      <div className="flex-shrink-0">
        <img src={item.img} className="img-fluid" style={{ width: '150px' }} alt="card" />
      </div>
      <div className="flex-grow-1 ms-3">
        <a href="#!" label="sometext" className="float-end text-black"><i className="fas fa-times" /></a>
        <h5 className="text-primary">{item.title}</h5>
        <div className="d-flex align-items-center">
          <p className="fw-bold mb-0 me-5 pe-3">{`$${item.price}`}</p>
        </div>
        <button type="button" onClick={removeFromCart}>Remove</button>
      </div>
    </div>
  );
}
