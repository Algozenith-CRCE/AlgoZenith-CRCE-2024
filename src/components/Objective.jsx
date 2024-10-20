import React from 'react';
import Fade from 'react-reveal/Fade';

import './Objective.css';
import Target from '../assets/target.png'


const ObjectiveComponent = () => {
  const objectives = [
    {
      title: 'Synergistic Collaboration',
      description:
        'Algozenith fosters interdisciplinary collaboration, uniting individuals from various domains to collectively share and generate innovative ideas, catalyzing progress and solutions across diverse fields.',
    },
    {
      title: 'Empowering Tech Enthusiasts',
      description:
        'Algozenith is dedicated to enhancing the technical capabilities of tech enthusiasts, emphasizing data structures, algorithms, and competitive programming, thereby empowering individuals for success in the tech industry.',
    },
    {
      title: 'Community Building',
      description:
        'Algozenith\'s primary mission is to organize events centered around data structures, algorithms, and competitive programming, aiming to foster a vibrant community of tech enthusiasts while promoting excellence in these crucial domains.',
    },
  ];

  return (
    <div className="objective-container" id='objectives'>
        <h1 className="events-title" style={{'fontSize':'2rem','paddingBottom':'5px','fontWeight':500}}><strong>OBJECTIVES</strong></h1>
        <Fade bottom>
          <div className="obj-cards-container">
              {objectives.map((objective, index) => (
                <div className="obj-card" key={index}>
                    <img src={Target} alt='icon' style={{'height':'40px','marginRight':'5px'}} className='obj-img'/>
                    <div className='obj-content'>
                      <h2 style={{'fontSize':'1.3rem'}}>{objective.title}</h2>
                      <p style={{'fontSize':'1.1rem'}}>{objective.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </Fade>
    </div>
  );
};

export default ObjectiveComponent;
