import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './SingleUser.css';


const SingleUser = (props) => {
    const {name, email, phone, img} = props.user;
    return (
        <div className="user">
            <div>
                <div className="user-avatar">
                    <img src={img} alt=""/>
                </div>
                <div>
                    <h5>Username : {name} </h5>
                    <h5>Email : {email} </h5>
                    <h5>Phone: {phone} </h5>
                    <button className="connect-btn" onClick={props.handleConnect}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Connect</button>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;