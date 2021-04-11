import React, { useEffect, useState } from "react";
import "./Languages.css";

import csharplogo from '../../images/csharplogo.png';
import javalogo from '../../images/javalogo.png';
import pythonlogo from '../../images/pythonlogo.png';
import jslogo from '../../images/jslogo.png';
import clogo from '../../images/clogo.png';
import kotlinLogo from '../../images/kotlin.png';

import ShowAndHide from './showAndHide';


const Languages = () => {

    const [id, setId] = useState({
        newId: '',
    })

    const onClickHandler = (e) => {

        e.preventDefault();
        const id = e.target.parentNode.parentNode.getAttribute('href').toString().substring(1);
        setId(prevs => {
            let currId = Object.assign({}, prevs.newId);
            currId.newId = id;
            return currId;
        })
    }

    return (
        <div className="language" id="language">
            <div className="titleLanguage">
                <p className="glitch">
                    <span aria-hidden="true">Languages</span>Languages
                    <span aria-hidden="true">Languages</span>
                </p>

                <div className="logos">
                    <a href="/python">
                        <span>
                            <img onClick={onClickHandler} src={pythonlogo} className="rotatePython" width="130" height="130"></img>
                        </span>
                    </a>

                    <a href="/csharp">
                        <span>
                            <img onClick={onClickHandler} src={csharplogo} className="rotateCsharp" width="130" height="130"></img>
                        </span>
                    </a>

                    <a href="/java">
                        <span>
                            <img onClick={onClickHandler} src={javalogo} className="rotateJava" width="130" height="130"></img>
                        </span>
                    </a>
                    <br></br>
                    <a href="/javascr">
                        <span>
                            <img onClick={onClickHandler} src={jslogo} className="rotateJs" width="130" height="130"></img>
                        </span>
                    </a>
                    <a href="/clogo">
                        <span>
                            <img onClick={onClickHandler} src={clogo} className="rotateC" width="160" height="140"></img>
                        </span>
                    </a>

                    <a href="/kotlin">
                        <span>
                            <img onClick={onClickHandler} src={kotlinLogo} className="rotatePhp" width="130" height="130"></img>
                        </span>
                    </a>
                </div>
            </div>
            <div id="swap">
                <ShowAndHide id={id}></ShowAndHide>
            </div>
        </div>
    )
}



export default Languages;