import { React } from 'react'
import { Link } from 'react-router-dom';
// import Lottie from 'lottie-react';
import Fade from 'react-reveal/Fade';
import techVista from '../assets/techVista.png'
import './NewEvents.css';
// import Timer from '../assets/comingAnime.json'


export default function newEvents(props) { 
  return (
    <>
      <Fade bottom>
        <div className='wrap-register' style={{"flexDirection":"row","marginTop":props.margin}}>
          <Fade bottom>
            <div className='poster-container'>
              <img src={techVista} alt="Event-Poster" className='event-poster'/>
            </div>
            <div className='register-div' style={{'backgroundColor':"#ddf1fff7",'paddingBottom':'10px','borderRadius':'10px'}}>
              <ul className='event-details' style={{"listStyle":'none'}}>
                <li className='event-name' style={{'fontSize':'2rem','textAlign':'center'}}><span>Tech Vista</span></li>
                <p className='event-name'>Day 1</p>
                <li><strong></strong></li>
                <li><strong>Speaker:</strong> Vivek Gupta (Ex-Google)</li>
                <li><strong>Date:</strong> 14<sup>th</sup> February 2024</li>
                <li><strong>Time:</strong> 1.30 PM</li>
                <li><strong>Venue:</strong> Seminar Hall 108</li>
                <p className='event-name'>Day 2</p>
                <li><strong>DSA Contest</strong></li>
                <li><strong>Date:</strong> 15<sup>th</sup> February 2024</li>
                <li><strong>Time:</strong> 1.30 PM</li>
                <li><strong>Venue:</strong> Seminar Hall 108</li>
              </ul>
              {/* <Link to='/register' className='btn-wrap'>
                <button className='register-btn' style={{'display':props.display}}  >Register</button>
              </Link> */}
            </div>
          </Fade>
        </div>
      </Fade>
    </>
  )
}

{/* <ul style={{"listStyle":'none'}}>
                <li className='event-name'><span>24 hours UI Competition</span></li>
                <li><strong></strong></li>
                <li><strong>Deadline:</strong> <span style={{'color':"#800000"}}><strong>2<sup>nd</sup> October, 7 AM</strong></span></li>
                <li id='problem-statement' className='highlight' style={{"backgroundColor":"#ddf1fff7","marginTop":"15px","marginBottom":"20px","padding":"20px"}}><strong>Problem Statement:</strong><br/>Create front-end for a luxury fashion e-commerce retailer targeting high-end fashion enthusiasts. Utilize HTML, CSS, JavaScript, or your preferred framework (e.g., React, Angular, or Vue.js) to design a responsive and visually stunning landing page. Prioritize smooth navigation, engaging designer profiles, user interactions (reviews and ratings).</li>
              </ul> */}

{/* <Lottie animationData={Timer} className='coming-image'/> */}

{/* <span className='highlight' style={{"textAlign":"center"}}>
                  <p><span className='highlighted' style={{"fontSize":"25px"}}>Congratulations to all the Winners of Algozenith Unleashed🎉✨</span> </p>
                  <p className='names' style={{"fontSize":"20px","lineBreak":"auto"}}>1<sup>st</sup> Prize🥇</p>
                <p className='names' style={{"fontSize":"20px","lineBreak":"auto"}}> <strong>Mr. Vivian Ludrik</strong></p>
                <p className='names' style={{"fontSize":"20px"}}>2<sup>nd</sup> Prize🥈</p>
                <p className='names' style={{"fontSize":"20px"}}><strong>Mr. Rishabh Pathak</strong></p>
                </span> */}
