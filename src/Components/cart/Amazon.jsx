import React from 'react';
import list from './data';
import './amazon.css';
import Cards from './Cards'
import Footer from '../Footer/Footer'
const Amazon = ({ handleClick }) => {
  return (
    //collection name
    <div className='amaz'>
      <h1 className='amz1' id='amzs1'>Hunt Collection</h1>
      <h1 className='amz2'id='amzs2'>Tank Collection</h1>
      <h1 className='amz3'id='amzs3'>Decoration Collection</h1>
      <h1 className='amz4'id='amzs4'>Food & Med Collection</h1>
      <h1 className='amz5'id='amzs5'>AQUARIUAM Fish</h1>
      <h1 className='amz6'id='amzs6'>Coral Reef</h1>
    <section className='seccard'>
     
      {
        list.map((item) => (
          <Cards  item={item} key={item.id} handleClick={handleClick} />
        ))
      }
    </section>
    <div className='footeramz'>
    <Footer/>
    </div>
    
    </div>
    
  )
}

export default Amazon