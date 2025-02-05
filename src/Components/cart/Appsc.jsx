import React, { useState } from 'react';
import Navbar from './Navbar';
import Amazon from './Amazon';
import Cart from './Cart';
import './amazon.css';
const Appsc = () => {
	{/*add to cart js function*/}
	const [show, setShow] = useState(true);
	const [cart, setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item) => {
		let isPresent = false;
		cart.forEach((product) => {
			if (item.id === product.id)
				isPresent = true;
		})
		if (isPresent) {
			setWarning(true);
			setTimeout(() => {
				setWarning(false);
			}, 2000);
			return;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) => {
		let ind = -1;
		cart.forEach((data, index) => {
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;

		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

	return (
		<React.Fragment>
			<Navbar size={cart.length} setShow={setShow} />
			{
				show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
			}
			{
				warning && <div className='warning'>Item is already added</div>
			}
		</React.Fragment>

	)
}

export default Appsc