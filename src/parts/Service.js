import React from 'react';
import Service1 from '../assets/images/service1.png';
import Service2 from '../assets/images/service2.png';
import Service3 from '../assets/images/service3.png';
import Fade from 'react-reveal/Fade';

const Service = () => {
    return (
        <section className="container hero2">
            <div className="row d-flex align-items-center">
                <div className="col-md-5 d-none d-md-block">
                    <div className="container-grid">
                        <div className="row-1">
                            <img className="item column 6 service1" alt="" src={Service1}></img>
                            <img className="item column 6 mt-4 service2" alt="" src={Service2}></img>
                        </div>
                        <img className="item column 6 row-1 service3" alt="" src={Service3}></img>
                    </div>
                </div>
                <Fade bottom>
                    <div className="col-md-7 p-5">
                        <h2 className="mb-3">How to we provides our services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                            purus sit amet luctus venenatis, lectus magna fringilla urna,
                            porttitor rhoncus dolor purus non enim praesent elementum facilisis :</p>
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default Service;