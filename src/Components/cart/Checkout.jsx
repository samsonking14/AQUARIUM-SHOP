import React from 'react'
import { useState } from 'react'
import './Checkout.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import checkout from '../../assets/fish/fishbg/checkout.mp4'
function Checkout() {
    {/*backend connect restapi order form */ }
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [Address, setAddress] = useState()
    const [city, setCity] = useState()
    const [zip, setZip] = useState()
    const [state, setState] = useState()
    const [country, setCountry] = useState()
    const [SpecialInstruction, setSpecialInstruction] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Orders',
            { name, email, phone, Address, city, zip, state, country, SpecialInstruction })
            .then(result => {
                console.log(result)
                navigate('/shop')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='chekbody'>
            {/*video*/}
            <div className="chekvideo">
                <video autoPlay muted loop id='chekmyvideo'>
                    <source src={checkout} type='video/mp4'></source>
                </video>
            </div>
            {/*form*/}
            <div className="chekform-box">
                <div className="chekform-value">
                    <form className='chekfom' onSubmit={handleSubmit}>
                        {/*title*/}
                        <h1 className='chekh1'>Place Your Order</h1>
                        {/*name*/}
                        <div className="chekinputbox1">
                            <input type="text" onChange={(e) => setName(e.target.value)} required />
                            <label>Name</label>
                        </div>
                        {/*email*/}
                        <div className="chekinputbox2">
                            <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                            <label>Email</label>
                        </div>
                        {/*phone*/}
                        <div className="chekinputbox3">
                            <input type="text" onChange={(e) => setPhone(e.target.value)} required />
                            <label>Phone</label>
                        </div>
                        {/*address*/}
                        <div className="chekinputbox4">
                            <textarea type="text" onChange={(e) => setAddress(e.target.value)} required />
                            <label>Address</label>
                        </div>
                        {/*city*/}
                        <div className="chekinputbox5">
                            <input type="text" onChange={(e) => setCity(e.target.value)} required />
                            <label>City</label>
                        </div>
                        {/*state*/}
                        <div className="chekinputbox6">
                            <input type="text" onChange={(e) => setState(e.target.value)} required />
                            <label>State</label>
                        </div>
                        {/*zip*/}
                        <div className="chekinputbox7">
                            <input type="text" onChange={(e) => setZip(e.target.value)} required />
                            <label>Zip</label>
                        </div>
                        {/*country*/}
                        <div className="chekinputbox8">
                            <input type="text" onChange={(e) => setCountry(e.target.value)} required />
                            <label>Country</label>
                        </div>
                        {/*dummy checkbox*/}
                        <div className="shipchek">
                            <label for="text">Is Shipping Address<br /> Same As Billing Address ?</label>
                            <label className='shicheklab'><input type="checkbox" /> Yes</label><br />
                            <label className='shicheklab1'><input type="checkbox" /> No</label>
                        </div>
                        {/*dummy checkbox*/}
                        <div className="giftchek">
                            <label className='gifcheklab' for="text">Send Gift ?</label>
                            <label className='giftcheklab'><input type="checkbox" /> Yes</label><br />
                            <label className='giftcheklab1'><input type="checkbox" /> No</label>
                        </div>
                        {/*special instruction*/}
                        <div className="chekinputbox9">
                            <textarea type="text" onChange={(e) => setSpecialInstruction(e.target.value)} required />
                            <label>Special Instruction</label>
                        </div>
                        {/*order now button*/}
                        <button className='cheklin'><span className='cheksp' >Order</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout