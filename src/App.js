import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './components/ProductContext';
import { CartContext } from './components/CartContext';

import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart }} >
			<Navigation  />

			<Route  path="/cart" component={ShoppingCart} />
			<Route  path="/" component={Products} />
			</CartContext.Provider>

			</ProductContext.Provider>
			</div>



			
	);
}

export default App;
