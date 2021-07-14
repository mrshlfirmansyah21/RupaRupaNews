import React from 'react';
import Kotak from '../assets/images/variasi.png';
import Phone from '../assets/images/phone.png';
import Android from '../assets/images/andoid.png';
import Apple from '../assets/images/apple.png';

const Variasi = () => {
    return (
        <section className="variasi d-flex flex-column  align-items-center">
            <img className="kotak" alt="" src={Kotak}></img>
            <div className="text container row d-flex align-items-center w-100">
                <div className="col-md-7 d-flex flex-column justify-content-center">
                    <h2 className="mb-4">
                        <span>Download</span> RupaRupaNewsApps <br />
                        and get the bonus
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.</p>
                    <div className="d-flex">
                        <img className="android" alt="" src={Android}></img>
                        <img className="apple" alt="" src={Apple}></img>
                    </div>
                </div>
                <div className="col-md-5 d-flex justify-content-between align-items-center mt-5 mt-md-0">
                    <img className="phone" alt="" src={Phone}></img>
                    <h2 className="discount ml-5">GET 40% OFF <br />
                                                    FOR EVERY <br />
                                                    PURCHASE!</h2>
                </div>
            </div>
        </section>
    )
}

export default Variasi;