import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./styles/Home.css"

function Home() {
    // const Api_key = "38b2247a-43d6-467a-b266-314ff5c01d9a"
    const [isGlowing, setIsGlowing] = useState(false);
    const buttonClassName = `glow-on-hover ${isGlowing ? 'glow' : ''}`;

    const handleMouseEnter = () => {
      setIsGlowing(true);
    };
  
    const handleMouseLeave = () => {
      setIsGlowing(false);
    };
    
  return (
    <div className='Home-page'> 
        <h1>Welcome to the Game</h1>
        <h3>Click the button below to start the game:</h3>
        <button
          className={buttonClassName}
          type="button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link className='Link-des' to="/StartGame">StartGame</Link>
        </button>
    </div>
  )
}

export default Home