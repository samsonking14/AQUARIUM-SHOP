import React from 'react'
import logo from '../../assets/QUA.png'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='footpage'>
            <footer id="Foot" className="footer">
                <div className="foocontainer">
                    {/*logo*/}
                    <div className="fooimg">
                        <a href='#'><img src={logo}></img></a>
                    </div>
                    {/*email contact*/}
                    <div className="footext">
                        <p className='one'>
                            If you have any question, please contact us at <a href="mailto:selvapandi322@gmail.com"
                                className="link">support@gmail.com</a>
                        </p>
                        <ul type="none" className="contact-list">

                            <li className="contact-item">
                                <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
                                {/*address*/}
                                <address className="address">
                                    Ayannar Kovil,Sellur,<br />Madurai-625002
                                </address>
                            </li>
                            {/*contact*/}
                            <li className="contact-item">
                                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

                                <a href="tel:+16234567891011" className="contact-link">(+91)-9092264342</a>
                            </li>

                        </ul>
                        {/*socialmedia*/}
                        <ul type="none" className="social-list">

                            <li>
                                <a href='https://www.facebook.com/Selvapandi14201' className="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href='https://twitter.com/selvapandi57503' className="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href='https://www.instagram.com/mad_sp_unique/' className="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                            </li>

                        </ul>

                    </div>
                    {/*paragraph*/}
                    <div className='foo-tx-1'>
                    <ul type="none" className="footer-list">

                        <li>
                            <p className="footer-list-title">Corporate</p>
                        </li>

                        <li>
                            <a className="footer-link">Careers</a>
                        </li>

                        <li>
                            <a className="footer-link">About Us</a>
                        </li>

                        <li>
                            <a className="footer-link">Contact Us</a>
                        </li>

                        <li>
                            <a className="footer-link">FAQs</a>
                        </li>

                        <li>
                            <a className="footer-link">Vendors</a>
                        </li>

                        <li>
                            <a className="footer-link">Affiliate Program</a>
                        </li>

                    </ul>
                    </div>
                    {/*paragraph*/}
                    <div className='foo-tx-2'>
                    <ul type="none" className="footer-list">

                        <li>
                            <p className="footer-list-title">Information</p>
                        </li>

                        <li>
                            <a className="footer-link">Online Store</a>
                        </li>

                        <li>
                            <a className="footer-link">Privacy Policy</a>
                        </li>

                        <li>
                            <a className="footer-link">Refund Policy</a>
                        </li>

                        <li>
                            <a className="footer-link">Shipping Policy</a>
                        </li>

                        <li>
                            <a className="footer-link">Terms of Service</a>
                        </li>

                        <li>
                            <a className="footer-link">Track Order</a>
                        </li>

                    </ul>
                    </div>
                    {/*paragraph*/}
                    <div className='foo-tx-3'>
                    <ul type="none" className="footer-list">

                        <li>
                            <p className="footer-list-title">Services</p>
                        </li>

                        <li>
                            <Link to='/shopmain' className="footer-link">ShopMain</Link>
                        </li>

                        <li>
                            <Link to='/shop' className="footer-link">Shop</Link>
                        </li>

                        <li>
                            <Link to='/' className="footer-link">Home</Link>
                        </li>

                        <li>
                            <Link to='/login' className="footer-link">Login</Link>
                        </li>

                        <li>
                            <Link to='/signin' className="footer-link">Signin</Link>
                        </li>

                        <li>
                            <Link to='/checkout' className="footer-link">Order</Link>
                        </li>

                    </ul>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer