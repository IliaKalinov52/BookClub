import React from 'react';
import BoxCard from '../ui/BoxCard';
import axios from 'axios';

export default function BoxShop({ boxes }) {
  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">GIFT BOXES</h1>
          <p className="lead text-body-secondary">buy our amazing gift boxes ffs</p>
          <p>
            <a href="/shop/cart" className="btn btn-primary my-2">Go to cart</a>
            {/* <a href="#" className="btn btn-secondary my-2">Secondary action</a> */}
          </p>
        </div>
      </div>
      <div className="album py-5 bg-body-tertiary" style={{ width: '90%' }}>
        <div className="container" style={{ width: '90%' }}>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{ display: 'inline-list-item' }}>
            {boxes.map((el) => (<BoxCard box={el} />))}
          </div>
        </div>
      </div>
    </section>
  );
}
