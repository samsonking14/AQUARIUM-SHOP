import React from 'react'
import { useState, useEffect } from 'react'
import './Home.css'
import gsap from 'gsap'
import seasun from '../../assets/seasun.mp4'
import ImageSlider from './ImageSlider'
import coralreef from '../../assets/fish/fishbg/coral reef 5.webp'
import aboutus from '../../assets/fish/fishbg/aboutus.png'
import fightfi from '../../assets/fish/fish/Fighting fish.png'
import earguppy from '../../assets/fish/fish/platium red big ear guppy.png'
import bettafi from '../../assets/fish/fish/Betta Fish.png'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from './Header'
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const Home = () => {
    {/*nodemailer*/ }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_xh061gn';
        const templateId = 'template_jx3aw0d';
        const publickey = '5DGV-D1rfgZA3Bc5T';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Web Wizard',
            message: message,
        };


        emailjs.send(serviceId, templateId, templateParams, publickey)
            .then((response) => {
                console.log('Email Sent Successfully', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error Sending Email:', error);
            });
    }
    {/*animation*/ }
    useEffect(() => {
        let textAnimation = gsap.timeline();
        textAnimation.from('.word', {
            y: 100,
            stagger: {
                each: 0.10
            },
            opacity: 0,
        })
    }, [])

    const [text, setText] = useState("")
    const [fullText] = useState(
        "Hundreds of freshwater and saltwater fish available.Wide selection of aquatic plants, vines, and corals. Fish food, supplements, medication, and other aquarium supplies.We have the capability and experience to handle all aspects of your next aquarium project from the initial design of your dream tank, to installation of equipment and aquatic life."
    )
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index])
                setIndex(index + 1)
            }, 40)
        }
    }, [index])


    return (
        <div className='homepage'>
            {/* NavBar */}

            <Header />


            {/* Intro */}

            <section className="section-main">
                <div className="content">
                    {/*font*/}
                    <div className='anih1'>
                        {
                            'Are You Readdy !'.split('').map((word) => {
                                return word === ' ' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                            })
                        }
                    </div>
                    <div className='anih2'>
                        {
                            'To For This'.split('').map((word) => {
                                return word === ' ' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                            })
                        }
                    </div>
                    <div className='anih3'>
                        {
                            'Explore'.split('').map((word) => {
                                return word === ' ' ? <div className='word'>&nbsp;</div> :<div className='word'>{word}</div>
                            })
                        }
                    </div>
                    {/*icon*/}
                    <div className='h-exicon'>
                        <Link to='/shopmain'><ion-icon name="boat"></ion-icon></Link>
                    </div>
                </div>
                {/*backround video*/}
                <div className="video">
                    <video autoPlay muted loop id='myvideo'>
                        <source src={seasun} type='video/mp4'></source>
                    </video>
                </div>

            </section>


            {/* Shop */}

            <section className="s-shop" id="shop">
                <ImageSlider />
            </section>


            {/* About */}

            <section className="a-about" id="About">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 },
                    }}
                ><div className='a-btimg'><img className="cor" src={coralreef} /></div>

                </motion.div>

                <h1>ABOUT US</h1>
                <div className='a-conpar'><p>{text}</p></div>


                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 },
                    }}
                ><div className='a-btimg1'><img className="fish" src={aboutus} /></div>

                </motion.div>

            </section>


            {/* Contact */}
            <section className="c-contact" id="Contact">
                <form onSubmit={handleSubmit}>
                    <input name="name" type="text" className="feedback-input" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <input name="email" type="text" className="feedback-input" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <textarea name="text" className="feedback-input" value={message} placeholder="Comment" onChange={(e) => setMessage(e.target.value)}></textarea>
                    <input type="submit" value="SUBMIT" />
                </form>
                <div className="gall">
                    <Link to='/shop' className='flotimg'><img src={fightfi} /></Link>
                    <Link to='/shop' className='flotimg'><img src={earguppy} /></Link>
                    <Link to='/shop' className='flotimg'><img src={bettafi} /></Link>
                </div>
            </section>



            {/* Footer */}

            <footer id="Foot" className="footer">
                <Footer />
            </footer>



        </div>
    )
}

export default Home