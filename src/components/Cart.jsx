import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './card.css';

export const Cart = ({ card, setCard }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(card.reduce((acc, curr) => acc + parseInt(curr.amt), 0))
  }, [card]);

  const removeFromCart = (id) => {
    setCard(card.filter((item) => item.id !== id));
  };

  if (card.length === 0) {
    return (
      <div className="empty-cart">
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="checkout-btn" style={{textDecoration: 'none', display: 'inline-block', width: 'auto', padding: '1rem 2.5rem'}}>Go Shopping</Link>
      </div>
    );
  }

  return (
    <>
      <h1 className='card-heading'>Cart Items</h1>
      <div className="card-container">
        {card.map((product) => (
          <div className="card-product" key={product.id}>
            <div className="img">
              <img src={product.pic} alt={product.name} />
            </div>
            <div className="card-product-details">
              <h3>{product.name}</h3>
              <p>Price: Rs: {product.amt}</p>
            </div>
            <button className="btn-remove" onClick={() => removeFromCart(product.id)} style={{padding: '0.6rem 1rem', fontSize: '0.8rem'}}>
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <div className="card-amt">
         Total Amount: Rs: {total}
      </div>
      
      <button className="checkout-btn" onClick={() => alert('Order Placed Successfully!')}>
        Proceed to Checkout
      </button>

    </>
  )
}
