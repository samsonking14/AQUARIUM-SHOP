import React, { useState } from 'react';
import { useEffect } from 'react';
import "./cart.css";
import { Link } from 'react-router-dom'
const Cart = ({ cart, setCart, handleChange }) => {
    {/*add to cart js*/ }

    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(() => {
        handlePrice();
    })

    return (
        <div className='cartres'>
            <article>
                {
                    cart?.map((item) => (
                        //data id key
                        <div className="cart_box" key={item.id}>
                            {/*data image*/}
                            <div className="cart_img">
                                <img src={item.img} />
                                {/*data title*/}
                                <p>{item.title}</p>
                            </div>
                            {/*quantity*/}
                            <div className='amountvie'>
                                <button onClick={() => handleChange(item, -1)}> - </button>
                                <button>{item.amount}</button>
                                <button onClick={() => handleChange(item, +1)}> + </button>
                            </div>
                            {/*data price*/}
                            <div className='pricevie'>
                                <span className='itepri'>Rs.{item.price}</span>
                                {/*delete*/}
                                <button className='trahion' onClick={() => handleRemove(item.id)} ><ion-icon title="remove" name="trash-outline"></ion-icon></button>
                            </div>
                        </div>
                    ))}

            </article>
            {/*price title*/}
            <div className='total'>
                <span>Total Price Of Your Cart</span>
                {/*checkout order page go button*/}
                <Link to='/checkout' className='link'>CheckOut</Link>
                {/*total price*/}
                <span>Rs . {price}</span>
            </div>
        </div>
    )
}

export default Cart