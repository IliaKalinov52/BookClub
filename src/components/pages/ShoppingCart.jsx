import React, { useState } from 'react';
import axios from 'axios';
import CardItem from '../ui/CardItem';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function ShoppingCart({ boxesRes }) {
  const [boxArr, setArr] = useState(boxesRes);
  const checkOut = async () => {
    const response = await axios.post('/shop/checkout');
    if (response.status === 200) {setArr([])
      Notify.success(`Your order is being processed`);
    };
  };
  console.log(typeof boxes);
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card shopping-cart" style={{ borderRadius: '15px' }}>
              <div className="card-body text-black">
                <div className="row">
                  <div className="col-lg-6 px-5 py-4">
                    <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>
                    <div>
                      {boxArr.map((el, index) => <CardItem key={Math.floor(Math.random() * 100)} item={el} setArr={setArr} />)}
                    </div>
                    {/* Other product entries */}
                  </div>
                  {/* Payment section */}
                  <p>
                    Total:
                    {`     $${boxArr.reduce((prev, curr) => prev + (curr.price - 0), 0).toFixed(2)}`}
                  </p>
                  <button type="button" onClick={checkOut}>Check out</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
