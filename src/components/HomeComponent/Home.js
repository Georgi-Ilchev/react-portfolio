import React, { useEffect, useState, Component } from "react";
import "./Home.css";
import Typical from 'react-typical';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {

    return (
        <section className="sectionHome">
            <div>
                <div className="nav">
                    <div id="show_bg_2">
                        <p className="right-side">
                            <span id="fistPart">Port</span>
                            <span id="secondPart">folio.</span>
                        </p>
                        <div className="HomeIntro ">
                            <div className="introduction">
                                <p>Hello! My name is
                    <span className="name">Georgi Ilchev</span>
                                    <span>and i am a student at</span>{' '}
                                    <Typical className="type"
                                        loop={Infinity}
                                        wrapper="b"
                                        steps={[
                                            'SoftUni', 1500,
                                            'UNWE', 1500]} />
                                </p>
                            </div>
                            <a href="https://github.com/Georgi-Ilchev" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Home;