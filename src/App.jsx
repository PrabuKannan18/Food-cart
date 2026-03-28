import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Cart } from './components/Cart'
import { Login } from './components/Login'
import { Signup } from './components/Signup'

function App() {
  const [card, setCard] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(card));
  }, [card]);

  const handleLogin = (userData) => {
    setUser(userData);
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <>
      <BrowserRouter basename="/Food-cart">
      <Header card={card} user={user} onLogout={handleLogout} />
      <div className="container">
        <Routes>
          <Route path="/" element={user ? <Home card={card} setCard={setCard}/> : <Navigate to="/signup" />} />
          <Route path="/cart" element={user ? <Cart card={card} setCard={setCard}/> : <Navigate to="/signup" />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
        </Routes>
      </div>
      <div className="name">
        <p>Designed by <span> Prabu Kannan</span></p>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
