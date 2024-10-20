import React from 'react'
import Fade from 'react-reveal/Fade';

import './Events.css'
import NewEvents from './NewEvents'
import PastEvents from './PastEvents'


export default function Events() {
  return (
    <>
      <div className='events-container' id='events'>
        <Fade bottom>
          <p className='events-title'><strong>EVENTS</strong></p>
          <p className='events-des'>Explore our diverse range of tech-centric events, designed to inspire, educate, and connect coding enthusiasts</p>
            <p className='events-title' style={{'fontSize':'1.8rem'}}><strong>Recent Event</strong></p>
            <NewEvents display='true' margin='20px'/>
            <p className='events-title' style={{'fontSize':'1.8rem'}}><strong>Past Events</strong></p>
            <PastEvents />
        </Fade>
      </div>
    </>
  )
}
