import React from 'react'
import { useState } from 'react'
import sigin from '../../assets/fish/fishbg/signin.mp4'
import x from '../../assets/fish/fishbg/x.jpg'
import fb from '../../assets/fish/fishbg/fb.png'
import google from '../../assets/fish/fishbg/google.png'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    {/*login page backend*/ }
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/users', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/')
                }

            })
            .catch(err => console.log(err))
    }
    return (
        <div className='logsection'>
            {/*backround video*/}
            <div className="logvideo">
                <video autoPlay muted loop id='logmyvideo'>
                    <source src={sigin} type='video/mp4'></source>
                </video>
            </div>
            <div className="logform-box">
                <div className="form-value">
                    <form onSubmit={handleSubmit}>
                        {/*login header*/}
                        <h1 className='logh1'>Login</h1>
                        {/*Email*/}
                        <div className="inputbox">
                            <ion-icon name="mail-outline" />
                            <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                            <label for="">Email</label>
                        </div>
                        {/*password*/}
                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline" />
                            <input type="password" onChange={(e) => setPassword(e.target.value)} required />
                            <label for="">Password</label>
                        </div>
                        {/*password*/}
                        <div className="forget">
                            <label for=""><input type="checkbox" /> Remember Me </label>
                            <a href="#"> Forget Password?</a>
                        </div>
                        {/*login button*/}
                        <button className='lobtn'>Log in</button>
                        {/*go to sigin page*/}
                        <div className="register">
                            <p>Dont't Have a Account <Link to='/signin'><span> Register</span></Link></p>
                        </div>

                        <div className="line">
                            <p >OR</p>
                            <h3>Login with</h3>
                        </div>
                        {/*google*/}
                        <div className="col">
                            <a href="https://accounts.google.com/v3/signin/identifier?opparams=%253F&dsh=S-2029773797%3A1700475300168640&access_type=offline&approval_prompt=auto&client_id=491142567551-knahnhvtuqg5lfgop589gfai7mml4k7k.apps.googleusercontent.com&o2v=1&redirect_uri=https%3A%2F%2Fwww.viralpep.com%2Fsignin&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&service=lso&theme=glif&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAMufO9CgJ8YR1KnZu6gQh5inob6yqvDq6PYNBALie4NzRx6qhcLHlmWN7aw8NLG2AX8OyCMRk5SiEFdeYBMWGRON1JAq2buy8PhJ__5WMuaXnDIZemmIPq9NF9qL4npW0vBuObwLxI7u3JocNckOsWZ-uXGmHSgIIevQz1FP7FKTbkGPwFa5wY-sMxQn6KAfS7UKkOjhostq9b8pqqsRdmI2-Hav7gCIRJoyYFW4bTzmXB4gUvkAX64XOHzYEw46KjUPoFqP2NbwYuoBbf9vHQyO_ApZntK0gOECMe4cfavMz82l18PW1E2ir8d2aMfiZnf5xvaMKodhslPq40NXtxUjtUWJYrC5vpGW6B47SNihUMsCslgwZSUH6vbsplbNXm3OniglektFBJ2LyTW5ZTqZHHR2QYv-KPEqWnSDPtffKMpcJ6lKI68qi35KQWFloqZwx3E78azr_L7tvF--HfvXquWSg%26as%3DS-2029773797%253A1700475300168640%26client_id%3D491142567551-knahnhvtuqg5lfgop589gfai7mml4k7k.apps.googleusercontent.com%26theme%3Dglif%23&app_domain=https%3A%2F%2Fwww.viralpep.com&rart=ANgoxcepL_2zRGF1ctBety-zwhpA6oS77o9Gwd1UxRHiJA2imjzS7psKLomeAek0CSJygz2WqWTAVMt7Jw_iMYn4-q3R4GGU4zDOb8Uyobay7Z4jyhD5GdE" className="google btn">
                                <img style={{ height: "50px", width: "50px" }} src={google} alt='google' title='google' />
                            </a><br />
                            {/*facebook*/}
                            <a href="https://www.facebook.com/" className="fb btn">
                                <img style={{ height: "50px", width: "50px" }} src={fb} alt='fb' title='facebook' />
                            </a><br />
                            {/*twitter*/}
                            <a href="https://twitter.com/" className="x btn">
                                <img style={{ height: "50px", width: "50px", 'borderRadius': "50px" }} src={x} alt='twitter' title='twitter' />
                            </a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login