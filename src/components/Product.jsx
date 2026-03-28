import React from 'react'
import './product.css';

export const Product = ({product,card,setCard }) => {

  const name=product.name.length > 20 ? product.name.substring(0,20) + ".." : product.name;

  const addCart=()=>{
    setCard([...card,product]);
  };
  const removeCart=()=>{
    setCard(card.filter((c)=>c.id !==product.id));
  };

  return (
    <div className="product">
        <div className="img">
            <img src={product.pic} alt={product.name}/>
        </div>
    <div className="details">
        <h3>{name}</h3>
        <p>Price rs:{product.amt}</p>
        {card.some((c) => c.id === product.id) ?
          <button className='btn-remove' onClick={removeCart}>remove from cart</button> :
          <button onClick={addCart}>Add to cart</button>
        }
    </div>
    </div>
  )
}
