import React from 'react'
import { Link } from "react-router-dom";
import './Header.css';

export const Header = ({ card, user, onLogout }) => {
  return (
    <div className="navbar">
      <div className="logo">Food<span>Cart</span></div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/cart"}>
            <span className='count'>{card.length}</span>View Cart
          </Link>
        </li>
        {user ? (
          <>
            <li className="user-info">
              Hi, <span>{user.name}</span>
            </li>
            <li>
              <button className="logout-btn" onClick={onLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/signup"} className="signup-nav">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}
