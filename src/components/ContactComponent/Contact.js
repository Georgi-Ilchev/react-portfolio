import { faFacebook, faGithub, faInstagram, faLinkedin, faSkype, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEnvelope, faHome, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-fontawesome';
import './Contact.css';
import codingIcon from '../../images/codingIcon.png';

import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="titleContact" >
                <p className="glitch">
                    <span aria-hidden="true">Contacts</span>Contacts
                    <span aria-hidden="true">Contacts</span>
                </p>
            </div>
            <div className='text'>
                <p>Hey!<br></br> Here are my social networks where you can find me. <br></br>
                Hint: click where the bubble appears to copy text.</p><br></br>
                <div>
                    <img src={codingIcon} className="rotateCode" width="160" height="160"></img>
                </div>

                <span className="facebook">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    <span>
                        <a href="" className="contactLink"> Facebook</a>
                    </span>
                </span>

                <span className="instagram">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    <span>
                        <a href="" className="contactLink"> Instagram</a>
                    </span>
                </span>

                <span className="telegram">
                    <FontAwesomeIcon icon={faTelegram} size="2x" />
                    <span>
                        <a href="" className="contactLink"> Telegram</a>
                    </span>
                </span>
                <br></br><br></br>

                <span className="twitter">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                    <span className="contactLink"> Twitter</span>
                </span>

                <span className="linkedIn">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    <span className="contactLink"> LinkedIn</span>
                </span>

                <span className="github">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    <span className="contactLink"> GitHub</span>
                </span>

                <br></br><br></br>

                <CopyToClipboard text="asd@skype">
                    <span className="skype" data-balloon-length="medium" aria-label="asd@skype" data-balloon-pos="down">
                        <FontAwesomeIcon icon={faSkype} size="2x" />
                        <span className="contactLink"> Skype</span>
                    </span>
                </CopyToClipboard>

                <CopyToClipboard text="goshicha1@gmail.com">
                    <span className="email" data-balloon-length="medium" aria-label="goshicha1@gmail.com" data-balloon-pos="down">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        <span className="contactLink"> Email</span>
                        {/* <button onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>Email</button> */}
                    </span>
                </CopyToClipboard>

                <CopyToClipboard text="+359 879 157 857">
                    <span className="phone" data-balloon-length="medium" aria-label="+359 879 157 857" data-balloon-pos="down">
                        <FontAwesomeIcon icon={faMobile} size="2x" />

                        <span className="contactLink"> Phone</span>
                    </span>
                </CopyToClipboard>
            </div>

        </div>
    )
}

export default Contact;