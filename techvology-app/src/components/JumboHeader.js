import React from 'react';
import styled from 'styled-components';
import natureImage from '../images/nature.jpg';

const JumboHeader = () => {
    return (
        <div>
            <div class="p-5 mb-4 bg-light rounded-3"
                style={{
                    backgroundImage: `url(${natureImage})`,
                    backgroundSize: 'cover',
                }}
            >
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Techvology</h1>
                    <p class="col-md-8 fs-4">Carbon Footprint: Bigger isn't better</p>
                </div>
            </div>
        </div>
    )
}

export default JumboHeader;
