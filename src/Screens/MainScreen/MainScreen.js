import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './MainScreen.css';

const MainScreen = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const isButtonDisabled = name === '' || room === '';

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
                </div>
                <Link
                    onClick={event => (!name || !room) ? event.preventDefault() : null}
                    to={`/chat?name=${name}&room=${room}`}>
                    <button
                        disabled={isButtonDisabled}
                        className={isButtonDisabled ? "button mt-20 disabled" : "button mt-20 enable"}
                        type="submit">
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default MainScreen;