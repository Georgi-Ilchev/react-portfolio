import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel';
import "./Resource.css";
import { ScrollRotate } from 'react-scroll-rotate';
import settings from "../../images/settings.png";

const Resource = () => {
    const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
        { width: 1500, itemsToShow: 4 }
    ];

    return (
        <section className="sectionResource">
            <div className="resource" id='resource'>
                <div>
                    <ScrollRotate method={"perc"} loops={3}>
                        <img id="rotateSettings" src={settings} width="80" height="80"></img>
                    </ScrollRotate>
                </div>
                <div className="resourceTitle">
                    <p className="glitch">
                        <span aria-hidden="true">Resources</span>Resources
                    <span aria-hidden="true">Resources</span>
                    </p>

                </div>
                <div className="cards">
                    <Carousel breakPoints={breakPoints}>
                        <div id="glitchImg">
                            <a id="cardsText" href='https://www.youtube.com/watch?v=7Xyg8Ja7dyY' target="_blank">Glitch Effect</a>
                        </div>

                        <div id="homeImg">
                            <a id="cardsText" href='https://www.youtube.com/watch?v=zwCaIrZ64M4' target="_blank">Home button</a>
                        </div>

                        <div id="clipboardImg">
                            <a id="cardsText" href='https://www.npmjs.com/package/react-copy-to-clipboard' target="_blank">Copy to clipboard</a>
                        </div>

                        <div id="sliderImg">
                            <a id="cardsText" href='https://www.npmjs.com/package/react-elastic-carousel' target="_blank">Slider p1</a>
                        </div>

                        <div id="sliderImg">
                            <a id="cardsText" href='https://www.youtube.com/watch?v=CC1pDNKQCBs' target="_blank">Slider p2</a>
                        </div>

                        <div id="backgroundImg">
                            <a id="cardsText" href='https://uigradients.com/#Summer' target="_blank">Backgrounds</a>
                        </div>

                        <div id="rotateImg">
                            <a id="cardsText" href='https://madewithreactjs.com/react-scroll-rotate' target="_blank">Scroll rotate</a>
                        </div>

                        <div id="balloonImg">
                            <a id="cardsText" href='https://kazzkiq.github.io/balloon.css/' target="_blank">Balloon css</a>
                        </div>

                        <div id="transformImg">
                            <a id="cardsText" href='https://css-tricks.com/almanac/properties/t/transform/' target="_blank">Transform css p1</a>
                        </div>

                        <div id="transformImg">
                            <a id="cardsText" href='https://www.w3schools.com/cssref/css3_pr_transform.asp' target="_blank">Transform css p2</a>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Resource;