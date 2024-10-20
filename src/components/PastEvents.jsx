import React from 'react'
import Fade from 'react-reveal/Fade';

import './PastEvents.css'
import EventCard from './EventCard'
import Unleashed from '../assets/unleashed.jpeg'
import poster from '../assets/mememania.png'


let eventNames = [
{
  "name": "MEMEMANIA",
  "image":poster,
  "height":"150px",
  "description": "Where coding and programming enthusiasts unleash their humor and creativity."
},
{
  "name": "AlgoZenith UNLEASHED",
  "image":Unleashed,
  "height":"115px",
  "description": "A webinar by Ms. Vanshita Singh and followed by a 24h UI Competition the next day"
}
]

export default function PastEvents() {
  return (
    <div className='past-event-container'>
      <Fade bottom>
      <div className='pastevents-container'>
        {eventNames.map((event) => {
                              return <EventCard image={event.image} name={event.name} Description={event.description} height={event.height}/>
                          }
                        )
        }
      </div>
      </Fade>
    </div>
  )
}
