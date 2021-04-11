import { EcoTwoTone } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Header.css";


const Header = () => {
    const [pageY, setPageY] = useState({
        pageY: ''
    })

    const inPageValueY = {
        portfolio: 600,
        languages: 1200,
        experience: 1810,
        resources: 2420,
        contacts: 3400,
    }

    // window[`scrollTo`]({ top: 2420, behavior: `smooth` })
    const navigate = (e) => {
        e.preventDefault();

        let element = e.target.innerHTML
        if (element == 'Home') {
            window[`scrollTo`]({ top: 0, behavior: `smooth` })
        } else if (element == 'Portfolio') {
            window[`scrollTo`]({ top: 600, behavior: `smooth` })

        } else if (element == 'Languages') {
            window[`scrollTo`]({ top: 1250, behavior: `smooth` })

        } else if (element == 'Experience') {
            window[`scrollTo`]({ top: 1910, behavior: `smooth` })

        } else if (element == 'Resources') {
            window[`scrollTo`]({ top: 2565, behavior: `smooth` })

        } else if (element == 'Contacts') {
            window[`scrollTo`]({ top: 3400, behavior: `smooth` })
        }
        else {
            window[`scrollTo`]({ top: window.pageYOffset, behavior: `smooth` })
        }
    }

    const [headerText, setHeaderText] = useState();
    useEffect(() => {
        const header = document.getElementById("header");
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > header.offsetHeight) {
                header.classList.add("sticky");
                setHeaderText();
            } else {
                header.classList.remove("sticky");
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    const EventHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div id="header" className="navbar" >
            <ul className="navbar-links" >
                <li><a onClick={navigate} href="/show_bg_2">Home</a></li>
                <li><a onClick={navigate} href="/about">Portfolio</a></li>
                <li><a onClick={navigate} href="/language">Languages</a></li>
                <li><a onClick={navigate} href="/experience">Experience</a></li>
                <li><a onClick={navigate} href="/resource">Resources</a></li>
                <li><a onClick={navigate} href="/contact">Contacts</a></li>
            </ul>
        </div>
    )
};

export default Header;