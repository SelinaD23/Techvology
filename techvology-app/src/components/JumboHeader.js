import React from 'react';
import natureImage from '../images/Nature.jpeg';
import DailyTip from './DailyTip';
import "../assets/bootstrap/css/bootstrap.min.css";

const JumboHeader = () => {
    return (
        <div data-bss-parallax-bg="true" style= {{height: '500px',
        backgroundImage: `url(${natureImage})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover'}}>
        <section class="py-4 py-xl-5">
            <div class="row" style={{paddingTop: '0px', marginTop: '53px'}}></div>
            <div class="container h-100">
                <div class="text-white bg-dark border rounded border-0 p-4 py-5" style={{paddingLeft: '82px', marginLeft: '276px', marginRight: '276px'}}>
                    <div class="row h-100">
                        <div class="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                            <div>
                                <h1 class="text-uppercase fw-bold text-white mb-3">Techvology</h1>
                                <h4 class="mb-4">Carbon Footprint: Bigger isn't better</h4>
                                <DailyTip />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default JumboHeader;
