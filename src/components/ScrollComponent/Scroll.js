import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
// import "./Scroll.css";

import { faCoffee, faEnvelope, faHome, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '2vh',
        backgroundColor: '#transperent',
        color: 'whitesmoke',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: 'rgb(72, 219, 72)',
            backgroundColor: '#transperent'
        },
        right: '1%',
    }
}))

// backgroundColor: '#DCDCDC',
// color: 'black',

// color: '#397BA6',
// backgroundColor: '#DCDCDC'

const Scroll = ({ showBelow }) => {
    //check
    const classes = useStyles();

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    return (
        <div>
            {show &&
                <IconButton onClick={handleClick} className={classes.toTop}>
                    <FontAwesomeIcon icon={faHome} size="2x" />
                </IconButton>
            }
        </div>
    )
}

export default Scroll