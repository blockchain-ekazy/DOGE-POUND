import React from 'react'
import './Slider.css';
import si1 from '../Imgs/s1.jpg'
import si2 from '../Imgs/s2.jpg'
import si3 from '../Imgs/s3.jpg'
// import si4 from '../Imgs/s4.jpg'


export default function Slider() {
    return (
        <div className='container-fluid Home '>
            <div id="carouselExampleControls" className=" container ome carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className=" hoome d-block w-100" src={si1} alt="First slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={si3} alt="Second slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={si2} alt="Third slide"></img>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
