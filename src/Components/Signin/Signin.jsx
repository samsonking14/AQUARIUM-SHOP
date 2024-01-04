import React from 'react'
import { useState } from 'react'
import seamoon from '../../assets/seamoon.mp4'
import './Signin.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Signin() {
    {/**siginform backend join*/ }
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='sinsection'>
            {/** video*/}
            <div className="sinvideo">
                <video autoPlay muted loop id='sinmyvideo'>
                    <source src={seamoon} type='video/mp4'></source>
                </video>
            </div>
            <div className="sinform-box">
                {/*name*/}
                <div className="form-value">
                    <form onSubmit={handleSubmit}>
                        <h1 className='sinh1'>signup</h1>
                        <div className="inputbox">
                            <input type="name" onChange={(e) => setName(e.target.value)} required />
                            <label for="">Name</label>
                        </div>
                        {/**email*/}
                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                            <label for="">Email</label>
                        </div>
                        {/**password*/}
                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} required />
                            <label for="">Password</label>
                        </div>
                        {/*forget check*/}
                        <div className="forget">
                            <label for=""><input type="checkbox" /> i agree privacy policy & terms</label>
                            <a href="#"></a>
                        </div>
                        {/*sigin */}
                        <button className='si'>sign up</button>
                        {/*login go */}
                        <div className="register">
                            <p>Already Have a Account <Link to='/login'><span>Login</span></Link></p>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signin