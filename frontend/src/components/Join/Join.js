import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Join.css"

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="joinOuterContainer">
            {console.log('iam in join')}
            <div className="joinInnerContainer">
                <h1 className="heading">Join </h1>
                <div><input onChange={(e) => setName(e.target.value)} placeholder="Name" className="joinInput"
                            type="text"/></div>
                <div><input onChange={(e) => setRoom(e.target.value)} placeholder="Room" className="joinInput mt-20"
                            type="text"/></div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null}
                      to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;