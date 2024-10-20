import React from 'react';

import './EventCard.css';

export default function EventCard(props) {
  return (
    <div className='wrap-card'>
        <div className='card-image-container'>
          <img src={props.image} alt="Event-Poster" className='card-image' style={{"height":props.height}}/>
        </div>
        <div className='card-content'>
          <p className='card-name'>{props.name}</p>
          <p className='card-des'>{props.Description}</p>
        </div>
      </div>
  )
}
