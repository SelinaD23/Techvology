import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import cleanAirLogo from '../images/catf.jpeg';

const Donation = () => {
  return (
    <div>
      <section class="py-4 py-xl-5">
        <div class="container h-100">
          <div class="text-white border rounded border-0 p-4 py-5" style={{ backgroundColor: '#37782C' }}>
            <div class="row h-100">
              <div class="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                <div>
                  <h1 class="text-uppercase fw-bold text-white mb-3">Monthly Charity</h1>
                  <p class="mb-4">Join the fight against climate change</p>
                  <a href="https://www.catf.us/donate/" target="_blank" rel="noreferrer">
                  <button class="btn btn-light fs-5 py-2 px-4" type="button" href="https://www.catf.us/donate/" style={{backgroundColor: '#9FD983', color: '#37782C'}}>Donate Now!</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div class="container bg-dark rounded py-4 py-xl-5">
    <div class="row gy-4 gy-md-0">
        <div class="col-md-6">
            <div class="p-xl-5 m-xl-5"><img class="rounded img-fluid w-100 fit-cover" style={{minHeight: '300px'}} src={cleanAirLogo} /></div>
        </div>
        <div class="col-md-6 d-md-flex align-items-md-center">
            <div style={{maxWidth: '350px'}}>
                <h2 class="text-uppercase fw-bold">Clean Air Task Force<br /></h2>
                <p class="my-3">Their Mission: Push the technology and policy changes needed to achieve a zero-emissions, high-energy planet at an affordable cost.<br />Their Vision: Meet the world’s rising energy demand in a way that is financially, socially, and environmentally sustainable.<br /></p>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Donation;

