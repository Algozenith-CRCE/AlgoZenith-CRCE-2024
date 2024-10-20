import { React, useState} from 'react'
import  { Link }   from 'react-router-dom';
import { Fade } from 'react-reveal';

import "./BackBtn.css";
import blueLogo from '../assets/blueLogo.svg';


export default function BackBtn() {

  const [top, setTop] = useState(false);

  const changeBackground = () => {
    if( window.scrollY > 40) {
      setTop(true);
    }
    else {
      setTop(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <Fade top>
      <div className={top ? "top" : "top act"}>
        <Link to="/" ><img src={blueLogo} alt="logo" className="logo"></img></Link>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <ul className="menu">
              <li><Link to="/"><button className={top ? "back-btn" : "back-btn white-btn"}>Back to Home</button></Link></li>
          </ul>
      </div>
    </Fade>
  )
}
