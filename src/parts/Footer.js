import React from 'react';
// import Ig from '../assets/images/ig.png'
// import Fb from '../assets/images/fb.png'
// import Git from '../assets/images/git.png'
// import Email from '../assets/images/email.png'

const Footer = () => {
    function top () {
        window.scrollTo ({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <section className="container about">
            <div className="row d-flex">
                <div className="col-12 col-md-3">
                    <h3>Interior</h3>
                    <p>50 New Town Street, V2 5NW, Plastian, USA.</p>
                    <p>Costumer Service : support@interior.com</p>
                </div>
                <div className="col-12 col-md-3">
                    <h3>Support</h3>
                    <p>Privacy & Policy</p>
                    <p>Term & Conditions</p>
                    <p>Support System</p>
                </div>
                <div className="col-12 col-md-3">
                    <h3>Our Service</h3>
                    <p>About us</p>
                    <p>Design Services</p>
                </div>
                <div className="col-12 col-md-3">
                    <h3>Contac Us</h3>
                    <p>Whats App</p>
                    <p>Facebook</p>
                    <button onClick={() => top()}>Top</button>
                </div>
            </div>
        </section>
    )
}

export default Footer;