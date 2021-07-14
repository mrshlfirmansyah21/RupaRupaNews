import React from "react";
import News from "../assets/images/news.jpg"

const Hero = () => {
    return (
        <section className="container hero">
            <div className="row d-flex align-items-center">
                <div className="col-12 col-md-5">
                    <h2>Fill your space at home with stylish furniture</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non.</p>
                    <button className="btn">See More</button>
                </div>
                <div className="col-12 col-md-7">
                    <img src={News} alt=""></img>
                </div>
            </div>
        </section>
    )
}

export default Hero;