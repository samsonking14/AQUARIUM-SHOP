import React from 'react';
import './cards.css'

const Cards = ({ item, handleClick }) => {
  {/*data list*/ }
  const { title, price, img } = item;
  return (
    <section className='seccard'>
      {/*container*/}
      <div className='seccards'>
        {/*card*/}
        <div className="cards">
          {/*image*/}
          <div className="image_box">
            <img src={img} alt="Image" />
          </div>
          <div className="details">
            {/*title*/}
            <p>{title}</p>
            {/*price*/}
            <p>Rs.{price}</p>
            {/*add to cart*/}
            <button onClick={() => handleClick(item)} >Add to Cart<span className="ribbonnew" style={{ top: "-250px", right: "-30px" }}>NEW</span></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards