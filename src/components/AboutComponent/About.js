import React, { useEffect, useState } from "react";
import "./About.css";

import MyPhoto from '../../images/MyPhoto.png';


const About = () => {
    return (
        <div className="about" id="about">
            <div className="aboutTitle">
                <p className="glitch">
                    <span aria-hidden="true">Portfolio</span>Portfolio
                    <span aria-hidden="true">Portfolio</span>
                </p>
                <div>
                    <p className="info">
                        <span>I started learning programming in the beginning of 2020 and I realized that I really like it.<br></br></span>
                        <span>You can check more information about me here.</span>
                    </p>
                    <a className="download" href="">Download CV</a>
                </div>
                <div className="img">
                    <img className="me" src={MyPhoto}></img>
                </div>
            </div>
        </div>
    )
};

export default About;