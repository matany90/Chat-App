import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './MainScreen.css';
import chatLogo from '../../res/img/chatLogo.png'

const MainScreen = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const isButtonDisabled = name === '' || room === '';

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
            <img className="chatLogo" src={chatLogo} alt="chat Logo" />
                <h1 className="heading">ברוכים הבאים לצ'אט של מתן</h1>
                <h3 className="subHeading">זה הזמן להתחיל לצ'וטט! כנסו עם החברים לאותו חדר והכיף מתחיל</h3>
                <div>
                    <input placeholder="הכינוי שלך" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <input placeholder="שם החדר" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
                </div>
                <Link
                    onClick={event => (!name || !room) ? event.preventDefault() : null}
                    to={`/chat?name=${name}&room=${room}`}>
                    <button
                        disabled={isButtonDisabled}
                        className={isButtonDisabled ? "button mt-20 disabled" : "button mt-20 enable"}
                        type="submit">
                        התחבר
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default MainScreen;