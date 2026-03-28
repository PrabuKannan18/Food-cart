import React, { useState } from 'react'
import data from "../assets/product.json";
import { Product } from './Product';
import './home.css';


export const Home = ({card,setCard}) => {
    const [products] = useState(data);
  return (
    <div className="home">
        <div className="hero">
            <div className="hero-content">
                <h1>Delicious Food, <span>Delivered To You</span></h1>
                <p>Order from the best restaurants and enjoy high-quality meals at your doorstep.</p>
                <div className="hero-btns">
                    <button className="primary-btn">Explore Menu</button>
                    <button className="secondary-btn">Offers</button>
                </div>
            </div>
        </div>
        <div className="product-container">
            {products.map((product)=>(
                <Product key={product.id} product={product} 
                card={card} setCard={setCard}/>
            ))}
        </div>
    </div>
  )
}
