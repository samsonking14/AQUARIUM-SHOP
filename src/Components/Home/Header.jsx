import React from 'react'
import logo from '../../assets/QUA.png'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <div>
            <header>
                <a href="#" className="hdbrand" data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    {/*logo*/}
                    <img src={logo} /></a>
                <div className="hdmenu" data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    {/*navbar button*/}
                    <a href="#" className='hda'>Home</a>
                    <a href='#shop' className='hda'>Shop</a>
                    <a href="#About" className='hda'>About</a>
                    <a href="#Contact" className='hda'>Contact</a>
                </div>
                {/*login page button*/}
                <div className='hdbnred'>
                    <Link to='/login'><button className='hdbutton' data-aos="fade-left" data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="3000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"><span className='signin'><ion-icon name="log-in"></ion-icon></span></button></Link>
                </div>
            </header>
        </div>
    )
}

export default Header