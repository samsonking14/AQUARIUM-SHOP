import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import underwater from '../../assets/fish/fishbg/underwater.png'
import coral from '../../assets/fish/fishbg/coral underwater.png'
import decoration from '../../assets/fish/fishbg/decoration underwater.png'
import './ImageSlider.css'
const ImageSlider = () => {
    return (
        <div className='p-5'>
            <Carousel>
                {/*1st slide*/}
                <Carousel.Item>
                    <img className="image" src={underwater} alt="First slide" />
                    <Carousel.Caption>
                        <h1 className="text">A Water<span className="secndry"> World</span></h1>
                    </Carousel.Caption>
                </Carousel.Item>
                {/*2nd slide*/}
                <Carousel.Item>
                    <img className="image" src={coral} alt="Second slide" />
                    <Carousel.Caption>
                        <h1 className="text2">Welcome To<span className="secndry"> Coral Reef</span> It's Healthy For Fish</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                {/*3rd slide*/}
                <Carousel.Item>
                    <img className="image" src={decoration} alt="Third slide" />
                    <Carousel.Caption>
                        <h1 className="text3">Decoration Need To Setup <br /> For Your <span className="secndry">AQUARIUAM</span></h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider