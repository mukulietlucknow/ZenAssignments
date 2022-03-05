import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Section from './components/Section';
import React, {useState} from 'react';

function App() {
  let products = [
    {
      name: "Apple Mac",
      price: '$100',
      id: 1
    },
    {
      name: "Apple Mac 2",
      price: '$200',
      id: 2
    }
  ];

  const [cartItems, setCartItems] = useState([])

  const addToCart = item => {
      console.log(item);
      setCartItems(oldStateValue => {
        return [
          ...oldStateValue,
          item
        ]
      })
  }

  const removeFromCart = item => {
    console.log(item.props.name);
    const final = cartItems.filter((info) => item.props.name != info.props.name )
    setCartItems(final)
  }

  return (
    <>
      <Navigation count={cartItems.length}/>
      <Header />
      <Section products={products} onAdd={addToCart} onRemove={removeFromCart}/>
    </>
  );
}

export default App;
