import React, { useEffect, useState } from "react";
import "./Experience.css";

import codeWizard from '../../images/code-wizard.png';

const Experience = () => {

    return (
        <div id='experience' className="experience">
            <div className="experienceTitle">
                <p className="glitch">
                    <span aria-hidden="true">Experience</span>Experience
                    <span aria-hidden="true">Experience</span>
                </p>
            </div>
            <div className='first-container'>
                <span className="firstContainer">
                    <h1 id="experienceTitle">Start your training</h1>
                    <p className="experienceInfo">
                        SoftUni is the place where you can start developing yourself in the IT field. They offer start-up trainings with different languages ​​such as C#, Java, Python, Js as well as QA Engineering.
                        They have the best trainers who will teach you the most important skills.
                        What are you waiting for?
                        <span className="softuniInResources">
                            <a href="https://softuni.bg/" className="softuniInResources" target="_blank">SoftUni</a>
                        </span>
                    </p>
                </span>
            </div>

            <div className='second-container'>
                <span className="secondContainer">
                    <h1 id="experienceTitle">Start with C#</h1>
                    <p className="experienceInfo">
                        C# is an appropriate language with which you could start your IT adventure. It is an easy one to
                        start with, that prevents errors and has got many features, quality tools. It is also highly applicable and has a huge community support.
                        C# is being used for Mobile and Web applications, Web services and sites, Games and many others.
                    </p>
                </span>
            </div>
            <img className="codeWizardImg" src={codeWizard} ></img>
        </div>
    )
}

export default Experience;