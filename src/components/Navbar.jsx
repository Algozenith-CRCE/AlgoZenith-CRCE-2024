import React, { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { Fade } from 'react-reveal';

import blueLogo from '../assets/blueLogo.svg';
import "./Navbar.css";


function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [navbar, setNavbar] = useState(false);
  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const changeBackground = () => {
    if( window.scrollY > 50) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <Fade top>
        <header className={navbar ? "header" : "header active"}
        style={{"paddingTop":navbar ? "0px" : "10px","paddingBottom":navbar ? "0px" : "10px"}}>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={handleSetActive}
          >
            <img src={blueLogo} alt="logo" className="logo" />
          </ScrollLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
          <ul className="menu" style={{"backgroundColor":navbar ? "#e7effc" : "white"}}>
            <li>
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                onSetActive={handleSetActive}
                style={{ color: activeSection === "home" ? "#0077ff" : " ", transition: "color 0.3s ease"  }}
                className="scroll-link"
              >
                Home
              </ScrollLink>
            </li>
            <li >
              <ScrollLink
                to="objectives"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onSetActive={handleSetActive}
                style={{ color: activeSection === "objectives" ? "#0077ff" : " ", transition: "color 0.3s ease" }}
                className="scroll-link"
              >
                Objectives
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="events"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onSetActive={handleSetActive}
                style={{ color: activeSection === "events" ? "#0077ff" : " ", transition: "color 0.3s ease" }}
                className="scroll-link"
              >
                Events
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="team"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onSetActive={handleSetActive}
                style={{ color: activeSection === "team" ? "#0077ff" : " ", transition: "color 0.3s ease" }}
                className="scroll-link"
              >
                Team Members
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onSetActive={handleSetActive}
                style={{ color: activeSection === "contact" ? "#0077ff" : " ", transition: "color 0.3s ease" }}
                className="scroll-link"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </header>
      </Fade>
    </>
  );
}

export default Navbar;
