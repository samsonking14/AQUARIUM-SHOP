import React from 'react';
import './navbar.css';
import logo from '../../assets/QUA.png'
import fish from '../../assets/fish.png'
import coral from '../../assets/coral.png'
import fishes from '../../assets/fishes.png'
import home from '../../assets/home.png'
import hunt from '../../assets/fishpole.png'
import tank from '../../assets/fishtank.png'
import med from '../../assets/med.png'
import cave from '../../assets/cave.png'
import { Link } from 'react-router-dom';
import VideoCarousel from '../Aquashop/VideoCarousel';
const Navbar = ({ size, setShow }) => {
    return (
        <>
            <header className='navhed'>
                {/*logo*/}
                <Link to='/shopmain' className="asbrand"><img src={logo} title='shopmain' /></Link>
                {/*Menu*/}
                <div className="asmenushcd">
                    <a href="#" onClick={() => setShow(true)} title='Home' className='asmhdhom'>
                        <img src={home} />
                    </a>
                    <a href='#amzs1' onClick={() => setShow(true)} className='asmhdhom1' title='Hunt'><img src={hunt} /></a>

                    <a href='#amzs2' onClick={() => setShow(true)} className='asmhdhom2' title='Tank'><img src={tank} /></a>

                    <a href='#amzs3' onClick={() => setShow(true)} className='asmhdhom3' title='Toys'><img src={cave} /></a>

                    <a href='#amzs4' onClick={() => setShow(true)} className='asmhdhom4' title='Medicine'><img src={med} /></a>

                    <a href='#amzs5' onClick={() => setShow(true)} className='asmhdhom5' title='Fish'><img src={fishes} /></a>
                    
                    <a href='#amzs6' onClick={() => setShow(true)} className='asmhdhom6' title='Coral'><img src={coral} /></a>
                </div>

                {/*-cart icon*/}
                <div className="boxna" onClick={() => setShow(false)}><img src={fish} id="cart-iconna" />
                    <span className="cart-countna">{size}</span>
                </div>
            </header>
            {/*video slider*/}
            <div className='vidnav ovrly'>
                <VideoCarousel />
            </div>
        </>
    )
}

export default Navbar