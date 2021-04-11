import React from 'react';
import "./NotFound.css";
import notfound from '../../images/notfound.png';
import 'balloon-css';

class ShowAndHide extends React.Component {

    state = {
        divcontainer: false,
    }

    render() {
        var HandleChange = e => {
            this.setState({ divcontainer: !this.state.divcontainer });
        }

        const x = this.state.divcontainer;

        return (
            <div className="notfound">
                <center>
                    <h3 className="notfoundtitle" aria-label="Whats up!" data-balloon-pos="up" >Just a button</h3>
                    <hr />
                    <button className="notfoundbutton" onClick={HandleChange}>{x ? 'Hide' : 'Show'}</button>
                    {
                        x && (<img src={notfound}></img>)
                    }
                </center>
            </div>
        )
    }
}

export default ShowAndHide;