import React from 'react'
import './Shopmain.css'
import logo from '../../assets/QUA.png'
import gold from '../../assets/fish/fishbg/Gold.png'
import fishhook from '../../assets/fish/fishbg/fishhook.png'
import toy from '../../assets/fish/fishbg/toy.png'
import bowl from '../../assets/fish/fishbg/bowl.png'
import framefish from '../../assets/fish/fishbg/framefish.png'
import combokit from '../../assets/fish/fishbg/combokit.png'
import combotank from '../../assets/fish/fishbg/combotank.png'
import seahorse from '../../assets/fish/seahorse.png'
import seahorsevid from '../../assets/fish/seahorse.mp4'
import arwana from '../../assets/fish/Arwana.png'
import arwanavid from '../../assets/fish/arwana.mp4'
import bowl1 from '../../assets/fish/tank/bowl.png'
import bowl1vid from '../../assets/fish/bowl.mp4'
import fishpole from '../../assets/fish/hunt/fishpole.png'
import fishpolevid from '../../assets/fish/fishpole.mp4'
import salmon from '../../assets/fish/Salmon1.png'
import salmonvid from '../../assets/fish/salmon.mp4'
import neon from '../../assets/fish/neon tetra fish.png'
import neonvid from '../../assets/fish/neon.mp4'
import smltoy from '../../assets/fish/small toy.png'
import smltoy1 from '../../assets/fish/rocktoy.jpg'
import hook from '../../assets/fish/hunt/hook.png'
import hookvid from '../../assets/fish/fishbait.mp4'
import achovy from '../../assets/fish/Anchovy.png'
import achovyvid from '../../assets/fish/achovy.mp4'
import zebra from '../../assets/fish/Zebra-angel.png'
import zebravid from '../../assets/fish/angelfish.mp4'
import plant from '../../assets/fish/plants.png'
import plantvid from '../../assets/fish/plant.mp4'
import bag from '../../assets/fish/hunt/bag.png'
import bag2 from '../../assets/fish/fishpolebag.jpg'
import codfish2 from '../../assets/fish/cod fish.png'
import codfishvid from '../../assets/fish/codfish.mp4'
import goldfish from '../../assets/fish/goldfish.png'
import goldfishvid from '../../assets/fish/goldfish.mp4'
import motor from '../../assets/fish/motor.png'
import motor1 from '../../assets/fish/motor1.jpg'
import net from '../../assets/fish/hunt/net.png'
import netvid from '../../assets/fish/net.mp4'
import delivery from '../../assets/fish/service-icon-1.png'
import returnpro from '../../assets/fish/service-icon-2.png'
import secure from '../../assets/fish/service-icon-3.png'
import service from '../../assets/fish/service-icon-4.png'
import octo from '../../assets/fish/octo.png'
import brd from '../../assets/fish/brand1.png'
import brd2 from '../../assets/fish/brand2.png'
import brd3 from '../../assets/fish/brand3.png'
import brd4 from '../../assets/fish/brand4.png'
import brd5 from '../../assets/fish/brand5.png'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { motion } from "framer-motion";
const Shopmain = () => {
    return (
        <div>
            {/*Header*/}
            <header className='smhdr' id="sh">
                <Link to='/' className="smbrand" data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    {/*logo*/}
                    <img src={logo} /></Link>
                <div className="smmenu" data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    {/*nav button*/}
                    <a href="#" className='smdahed'><ion-icon name="home" ></ion-icon></a>
                    <a href="#shop" className='smdahed'><ion-icon name="bag"></ion-icon></a>
                    <a href="#Collection" className='smdahed'><ion-icon name="storefront"></ion-icon></a>
                    <a href="#About" className='smdahed'><ion-icon name="alert-circle"></ion-icon></a>
                    <a href="#Foot" className='smdahed'><ion-icon name="call"></ion-icon></a>
                </div>
            </header>

            {/*Home*/}
            <section id='home' className='intro'>
                {/*home font*/}
                <h1><span className="span">High Quality</span></h1>
                <h1><span className='span1'>AQUA FISH's</span></h1>
                <p className="hero-text">
                    <span className='drfal'>S</span>
                    <span className='drfal'>a</span>
                    <span className='drfal'>l</span>
                    <span className='drfal'>e</span>
                    <span className='drfal'>u</span>
                    <span className='drfal'>p</span>
                    <span className='drfal'>t</span>
                    <span className='drfal'>o</span>
                    <span className='drfal'>6</span>
                    <span className='drfal'>0</span>
                    <span className='drfal'>%</span>
                    <span className='drfal'>o</span>
                    <span className='drfal'>f</span>
                    <span className='drfal'>f</span>
                    <span className='drfal'>t</span>
                    <span className='drfal'>o</span>
                    <span className='drfal'>d</span>
                    <span className='drfal'>a</span>
                    <span className='drfal'>y</span></p>
                <Link to='/shop' data-aos="slide-left"
                    data-aos-duration="1000"
                    data-aos-delay="50"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    {/*AquaShop go to page button*/}
                    <button className='intbtn'><span className='shpex'>Shop</span></button></Link>
            </section>

            {/*Category*/}
            <section id='shop' className='categoryshop'>
                <h1 className='catehed' data-aos="fade-down"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"><span className="catspan">Top</span> categories</h1>
                <div className="catcontainer">

                    <div className="catecard">
                        <img className='cateimg' src={fishhook} />
                    </div>

                    <Link to='/shop' className='dummyshop'><h3 className="catecontent" data-aos="fade-down" data-aos-duration="3000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false">Hunt</h3></Link>

                    <div className="catecard">
                        <img className='cateimg1' src={bowl} />
                    </div>

                    <Link to='/shop' className='dummyshop'><h3 className="catecontent1" data-aos="fade-down" data-aos-duration="3000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false">Tank</h3></Link>

                    <div className="catecard">
                        <img className='cateimg2' src={toy} />
                    </div>

                    <Link to='/shop' className='dummyshop'><h3 className="catecontent2" data-aos="fade-down" data-aos-duration="3000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false">Toys</h3></Link>

                    <div className="catecard">
                        <img className='cateimg3' src={gold} />
                    </div>

                    <Link to='/shop' className='dummyshop'><h3 className="catecontent3" data-aos="fade-down" data-aos-duration="3000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false">AquariumFish</h3></Link>

                </div>
            </section>
            {/*Offer*/}
            <section>
                <motion.div className="offcontainer"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { obacity: 1, scale: 1 },
                        hidden: { obacity: 0, scale: 0 },
                    }}
                >
                    <div>
                        <img src={framefish} className='offimg' />
                        <p className="oofp">Selected Items. Online Only.</p>
                        <h3 className='offcardtit'>Hot Summer<span className='offcardsp'><br />Deals</span></h3>
                        <Link to='/shop' className='offbn'>Read More</Link>
                    </div>
                    <div>
                        <img src={combokit} className='offimg1' />
                        <p className="oofp1">Treats & Grooming</p>
                        <h3 className='offcardtit1'> Spoil your true<span className='offcardsp'><br />love</span></h3>
                        <Link to='/shop' className='offbn1'>Read More</Link>
                    </div>
                    <div>
                        <img src={combotank} className='offimg2' />
                        <p className="oofp2">Our Brand You Will Love</p>
                        <h3 className='offcardtit2'>New in this<span className='offcardsp'><br />year</span></h3>
                        <Link to='/shop' className='offbn2'>Read More</Link>
                    </div>
                </motion.div>
            </section>


            {/*Product*/}
            <section id='Collection' className='clsec'>
                <h2 className='clnh2' data-aos="fade-down" data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"><span className='clnps'>Best</span> Seller</h2>
                <div className="procontainer" data-aos="fade-up" data-aos-duration="1000"
                    data-aos-offset="200"
                    data-aos-delay="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false">
                    <div className="clncard">
                        <img src={seahorse} loading="lazy" alt="SeaHorse" className="conigm default" />
                        <video autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" className="conigm2 hover default2" >
                            <source src={seahorsevid} type='video/mp4' loading="lazy" className='viodsrc' alt="Etiam commodo leo sed" ></source>
                        </video>
                    </div>

                    <div className="concardcontent">

                        <div className="wrapper">
                            <div className="rating-wrapper" style={{ 'color': "#FFC105" }}>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                            </div>

                            <span className="concdspa">(1k+)</span>
                        </div>

                        <Link to='/shop' className="concdti">Sea Horse</Link>
                    </div>
                    <div className="clncard">
                        <img src={arwana} loading="lazy" alt="SeaHorse" className="conigm default" />
                        <video autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" className="conigm2 hover default2" >
                            <source src={arwanavid} type='video/mp4' loading="lazy" className='viodsrc' alt="Etiam commodo leo sed" ></source>
                        </video>
                    </div>

                    <div className="concardcontent">

                        <div className="wrapper">
                            <div className="rating-wrapper" style={{ 'color': "#FFC105" }}>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                            </div>

                            <span className="concdspa">(50k+)</span>
                        </div>

                        <Link to='/shop' className="concdti">Arwana</Link>
                    </div>
                    <div className="clncard">
                        <img src={bowl1} loading="lazy" alt="SeaHorse" className="conigm default" />
                        <video autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" className="conigm2 hover default2" >
                            <source src={bowl1vid} type='video/mp4' loading="lazy" className='viodsrc' alt="Etiam commodo leo sed" ></source>
                        </video>
                    </div>

                    <div className="concardcontent">

                        <div className="wrapper">
                            <div className="rating-wrapper" style={{ 'color': "#FFC105" }}>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                            </div>

                            <span className="concdspa">(80k+)</span>
                        </div>

                        <Link to='/shop' className="concdti">Aquarium</Link>
                    </div>
                    <div className="clncard">
                        <img src={fishpole} loading="lazy" alt="SeaHorse" className="conigm default" />
                        <video autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" className="conigm2 hover default2" >
                            <source src={fishpolevid} type='video/mp4' loading="lazy" className='viodsrc' alt="Etiam commodo leo sed" ></source>
                        </video>
                    </div>

                    <div className="concardcontent">

                        <div className="wrapper">
                            <div className="rating-wrapper" style={{ 'color': "#FFC105" }}>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                            </div>

                            <span className="concdspa">(30k+)</span>
                        </div>

                        <Link to='/shop' className="concdti">FishPole</Link>
                    </div>
                    <div className="clncard">
                        <img src={salmon} loading="lazy" alt="SeaHorse" className="conigm default" />
                        <video autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" className="conigm2 hover default2" >
                            <source src={salmonvid} type='video/mp4' loading="lazy" className='viodsrc' alt="Etiam commodo leo sed" ></source>
                        </video>
                    </div>

                    <div className="concardcontent">

                        <div className="wrapper">
                            <div className="rating-wrapper" style={{ 'color': "#FFC105" }}>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                            </div>

                            <span className="concdspa">(10k+)</span>
                        </div>

                        <Link to='/shop' className="concdti">Salmon</Link>
                    </div>
                    <div className="clncard">
                        <img src={neon} loading="lazy" alt="SeaHorse" className="conigm default" />
                        <video autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" className="conigm2 hover default2" >
                            <source src={neonvid} type='video/mp4' loading="lazy" className='viodsrc' alt="Etiam commodo leo sed" ></source>
                        </video>
                    </div>

                    <div className="concardcontent">

                        <div className="wrapper">
                            <div className="rating-wrapper" style={{ 'color': "#FFC105" }}>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                            </div>

                            <span className="concdspa">(10k+)</span>
                        </div>

                        <Link to='/shop' className="concdti">Neon Tetra</Link>
                    </div>
                    <div className="clncard">
                        <img src={smltoy} loading="lazy" alt="SeaHorse" className="conigm default" />
                        <img src={smltoy1} loading="lazy" alt="SeaHorse" className="conigm2 hover default2" />
                    </div>

                    <div className="concardcontent">

                        <div className="wrapper">
                            <div className="rating-wrapper" style={{ 'color': "#FFC105" }}>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                            </div>

                            <span className="concdspa">(2k+)</span>
                        </div>

                        <Link to='/shop' className="concdti">Toy</Link>
                    </div>
                    <div className="clncard">
                        <img src={hook} loading="lazy" alt="SeaHorse" className="conigm default" />
                        <video autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" className="conigm2 hover default2" >
                            <source src={hookvid} type='video/mp4' loading="lazy" className='viodsrc' alt="Etiam commodo leo sed" ></source>
                        </video>
                    </div>

                    <div className="concardcontent">

                        <div className="wrapper">
                            <div className="rating-wrapper" style={{ 'color': "#FFC105" }}>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                            </div>

                            <span className="concdspa">(10k+)</span>
                        </div>

                        <Link to='/shop' className="concdti">Fish Baits</Link>
                    </div>
                    <div className="clncard">
                        <img src={achovy} loading="lazy" alt="SeaHorse" className="conigm default" />
                        <video autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" className="conigm2 hover default2" >
                            <source src={achovyvid} type='video/mp4' loading="lazy" className='viodsrc' alt="Etiam commodo leo sed" ></source>
                        </video>
                    </div>

                    <div className="concardcontent">

                        <div className="wrapper">
                            <div className="rating-wrapper" style={{ 'color': "#FFC105" }}>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                            </div>

                            <span className="concdspa">(10k+)</span>
                        </div>

                        <Link to='/shop' className="concdti">Anchovy</Link>
                    </div>
                    <div className="clncard">
                        <img src={zebra} loading="lazy" alt="SeaHorse" className="conigm default" />
                        <video autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" className="conigm2 hover default2" >
                            <source src={zebravid} type='video/mp4' loading="lazy" className='viodsrc' alt="Etiam commodo leo sed" ></source>
                        </video>
                    </div>

                    <div className="concardcontent">

                        <div className="wrapper">
                            <div className="rating-wrapper" style={{ 'color': "#FFC105" }}>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                            </div>

                            <span className="concdspa">(30k+)</span>
                        </div>

                        <Link to='/shop' className="concdti">Zebra Angel</Link>
                    </div>

                    <div className="clncard">
                        <img src={plant} loading="lazy" alt="SeaHorse" className="conigm default" />
                        <video autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" className="conigm2 hover default2" >
                            <source src={plantvid} type='video/mp4' loading="lazy" className='viodsrc' alt="Etiam commodo leo sed" ></source>
                        </video>
                    </div>

                    <div className="concardcontent">

                        <div className="wrapper">
                            <div className="rating-wrapper" style={{ 'color': "#FFC105" }}>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                            </div>

                            <span className="concdspa">(50k+)</span>
                        </div>

                        <Link to='/shop' className="concdti">Plant</Link>
                    </div>
                    <div className="clncard">
                        <img src={bag} loading="lazy" alt="SeaHorse" className="conigm default" />
                        <img src={bag2} loading="lazy" alt="SeaHorse" className="conigm2 hover default2" />
                    </div>

                    <div className="concardcontent">

                        <div className="wrapper">
                            <div className="rating-wrapper" style={{ 'color': "#FFC105" }}>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                            </div>

                            <span className="concdspa">(90k+)</span>
                        </div>

                        <Link to='/shop' className="concdti">Bag</Link>
                    </div>
                    <div className="clncard">
                        <img src={codfish2} loading="lazy" alt="SeaHorse" className="conigm default" />
                        <video autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" className="conigm2 hover default2" >
                            <source src={codfishvid} type='video/mp4' loading="lazy" className='viodsrc' alt="Etiam commodo leo sed" ></source>
                        </video>
                    </div>

                    <div className="concardcontent">

                        <div className="wrapper">
                            <div className="rating-wrapper" style={{ 'color': "#FFC105" }}>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                            </div>

                            <span className="concdspa">(80k+)</span>
                        </div>

                        <Link to='/shop' className="concdti">Cod Fish</Link>
                    </div>
                    <div className="clncard">
                        <img src={goldfish} loading="lazy" alt="SeaHorse" className="conigm default" />
                        <video autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" className="conigm2 hover default2" >
                            <source src={goldfishvid} type='video/mp4' loading="lazy" className='viodsrc' alt="Etiam commodo leo sed" ></source>
                        </video>
                    </div>

                    <div className="concardcontent">

                        <div className="wrapper">
                            <div className="rating-wrapper" style={{ 'color': "#FFC105" }}>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                            </div>

                            <span className="concdspa">(99k+)</span>
                        </div>

                        <Link to='/shop' className="concdti">Gold Fish</Link>
                    </div>
                    <div className="clncard">
                        <img src={motor} loading="lazy" alt="SeaHorse" className="conigm default" />
                        <img src={motor1} loading="lazy" alt="SeaHorse" className="conigm2 hover default2" />


                    </div>

                    <div className="concardcontent">

                        <div className="wrapper">
                            <div className="rating-wrapper" style={{ 'color': "#FFC105" }}>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                            </div>

                            <span className="concdspa">(10k+)</span>
                        </div>

                        <Link to='/shop' className="concdti">Motor</Link>
                    </div>
                    <div className="clncard">
                        <img src={net} loading="lazy" alt="SeaHorse" className="conigm default" />
                        <video autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" className="conigm2 hover default2" >
                            <source src={netvid} type='video/mp4' loading="lazy" className='viodsrc' alt="Etiam commodo leo sed" ></source>
                        </video>
                    </div>

                    <div className="concardcontent">

                        <div className="wrapper">
                            <div className="rating-wrapper" style={{ 'color': "#FFC105" }}>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                                <ion-icon name="star" aria-hidden="true"></ion-icon>
                            </div>

                            <span className="concdspa">(99k+)</span>
                        </div>

                        <Link to='/shop' className="concdti">Net</Link>
                    </div>






                </div>
            </section>


            {/*Service*/}
            <section id='About' className='sersec'>
                <h2 className="serh2" data-aos="fade-left" data-aos-duration="5000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false">
                    <span className="serpan" >What you needs,</span>when they need it.
                </h2>
                <motion.div className="sercontainer">

                    <div className="sercard">
                        <img src={delivery} loading="lazy"
                            alt="service icon" className='sermai' />

                        <h3 className="sercardcon" >Free Same-Day Delivery</h3>

                        <p className="sertxt" >
                            Order by 2pm local time to get free delivery<br />on orders $35+ today.
                        </p>
                    </div>
                    <div className="sercard1">
                        <img src={returnpro} loading="lazy"
                            alt="service icon" className='sermai1' />
                        <h3 className="sercardcon1" >30 Day Return</h3>

                        <p className="sertxt1" >
                            35% off your first order plus 5% off<br /> all future orders.
                        </p>
                    </div>
                    <div className="sercard2">
                        <img src={secure} loading="lazy"
                            alt="service icon" className='sermai2' />
                        <h3 className="sercardcon2" >Security payment</h3>

                        <p className="sertxt2" >
                            25% off your online order of $50+.<br /> Available at most locations.
                        </p>
                    </div>
                    <div className="sercard3">
                        <img src={service} loading="lazy"
                            alt="service icon" className='sermai3' />
                        <h3 className="sercardcon3" >24/7 Support</h3>

                        <p className="sertxt3" >
                            shop online to get orders over<br /> $35 shipped fast and free.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/*Cta*/}
            <section className='cta'>
                <img src={octo} loading="lazy" alt="cat" className="ctasrc" />

                <div className="ctaacon">
                    <h2 className="ctah2">Bring it, love it or we'll replace it… Guaranteed!</h2>

                    <p className="secti-text">
                        we believe you will love their so much that if they don't… we'll help you replacement.That's our taste guarantee.We provide Aquarium-Fishes for home &<br /> whole sale.we 100% Replacement Guarantee.Safe & secured Delivery.
                    </p>



                </div>
            </section>



            {/*Brand*/}
            <section className='brad'>
                <h2 className="branh2">
                    <span className="branan">Popular </span> Brands
                </h2>
                <motion.div className="bradncontainer"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 },
                    }}
                >
                    <img src={brd} loading="lazy" alt="brand logo"
                        className="bransour" />
                    <img src={brd2} loading="lazy" alt="brand logo"
                        className="bransour1" />
                    <img src={brd3} loading="lazy" alt="brand logo"
                        className="bransour2" />
                    <img src={brd4} loading="lazy" alt="brand logo"
                        className="bransour3" />
                    <img src={brd5} loading="lazy" alt="brand logo"
                        className="bransour4" />

                </motion.div>
            </section>

            {/*Footer*/}
            <footer id="Foot" className="footer">
                <Footer />
            </footer>
        </div>
    )
}

export default Shopmain