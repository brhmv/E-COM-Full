import React from "react";
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import hero_image from '../Assets/hero4.png';

const Hero = () => {

    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New Arrivals Only</h2>

                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="hand_icon" />
                    </div>

                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>

                <div className="hero-latest-button">
                    <button >Lattest Collection</button>
                </div>

            </div>

            <div className="hero-right">
                <img src={hero_image} alt="hero_image" />
            </div>

        </div>
    )
}

export default Hero