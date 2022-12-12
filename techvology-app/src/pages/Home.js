import React from 'react'
import JumboHeader from '../components/JumboHeader'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import climateStrike from '../images/climate_strike.jpg';
import climateChange from '../images/climate_change.jpg';


const Text = {
  fontSize: '1.5rem',
  color: 'black',
  textAlign: 'left',
  padding: '1rem',
  margin: '1rem',
  fontFamily: 'Arial, Helvetica, sans-serif',
}

const Home = () => {
  return (
    <div>
      <JumboHeader />
      <Container class="py-4 py-xl-5" style={{paddingTop: '40px'}}>
        <div class="row gy-4 gy-md-0">
            <div class="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
                <div class="text-end">
                    <p class="fs-4 my-3">Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, such as through variations in the solar cycle. But since the 1800s, human activities have been the main driver of climate change, primarily due to burning fossil fuels like coal, oil and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun’s heat and raising temperatures. Examples of greenhouse gas emissions that are causing climate change include carbon dioxide and methane. These come from using gasoline for driving a car or coal for heating a building, for example. Clearing land and forests can also release carbon dioxide. Landfills for garbage are a major source of methane emissions. Energy, industry, transport, buildings, agriculture and land use are among the main emitters.</p>
                </div>
            </div>
            <div class="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center"><img class="rounded img-fluid w-100 fit-cover" src={climateStrike}/></div>
        </div>
    </Container>
    <div class="container py-4 py-xl-5">
        <div class="row gy-4 gy-md-0">
            <div class="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center"><img class="rounded img-fluid w-100 fit-cover" src={climateChange}/></div>
            <div class="col-md-6 d-md-flex align-items-md-center">
                <div>
                    <p class="fs-4 my-3">Everyone can help limit climate change. From the way we travel, to the electricity we use, the food we eat, and the things we buy, we can make a difference.
            Greenhouse gas emissions per person vary greatly among countries. In the United States of America, emissions in 2020 (the latest available data) were 14.6 tons of CO2 equivalent per person – more than double the global average of 6.3 tons, and six times the 2.4 tons per person in India.
            To preserve a livable climate, the average emissions per person per year will need to drop to around 2 to 2.5 tons of CO2e by 2030. Start with these ten actions to help tackle the climate crisis.
            </p>
            <p class="fs-4 my-3">
              - United Nations
            </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home