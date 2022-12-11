import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import cleanAirLogo from '../images/catf.jpeg';

const Donation = () => {
  return (
    <div>
      <div class="p-5 mb-4" style={{ backgroundColor: '#37782C' }}>
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold-center">Monthly Charity</h1>
          <p class="col-md-8 fs-4">Join the fight against climate change</p>
          <Button class="btn btn-lg" type="button" href="https://www.catf.us/donate/" style={{backgroundColor: '#9FD983', color: '#37782C'}}>Donate Now!</Button>
        </div>
      </div>
      <div class="p-5 mb-4" style={{ backgroundColor: '#37782C' }}>
        <Row>
          <Col md={6}>
            <Image
              src={cleanAirLogo}
              fluid
            />
          </Col>
          <Col md={6}>
            <div class="py-5 ">
              <h1 class="display-5 fw-bold-right" style={{ textAlign: 'right' }}>Clean Air Task Force</h1>
              <p class="md-8 fs-4" style={{ textAlign: 'right' }}>Push the technology and policy changes needed to achieve a zero emissions,
        high-energy planet at an affordable cost.</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Donation;

