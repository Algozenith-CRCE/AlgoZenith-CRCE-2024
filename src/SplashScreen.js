import React, { useState, useEffect } from "react";
import Logo from './assets/whiteLogo.svg'; // Adjust the path accordingly
import "./splashscreen.css"; // Link to the CSS file

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false); // State to control loading complete
  const [isFadingOut, setIsFadingOut] = useState(false); // State for fade-out effect

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval); // Clear interval when loaded
          setIsLoaded(true); // Set loaded to true
          return 100; // Ensure it reaches 100
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const timeout = setTimeout(() => {
        setIsFadingOut(true); // Start fade-out after loading
      }, 1000); // Delay before fading out

      return () => clearTimeout(timeout);
    }
  }, [isLoaded]);

  // Calculate opacity based on progress, starts increasing at 25%
  const logoOpacity = progress > 25 ? (progress - 25) / 75 : 0;

  return (
    <div className={`splash-screen ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <div className="logo-container" style={{ opacity: logoOpacity }}> {/* Adjust opacity smoothly */}
          <img src={Logo} className="splash-image" alt="Logo" /> {/* Imported SVG */}
        </div>
        <div className="loading-container">
          <div className="loading-bar">
            <div className="loading-bar-progress" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="loading-percentage">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
