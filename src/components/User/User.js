import React from 'react';
import './User.css';
import fakeData from '../../fakedata';
import SingleUser from './SingleUser/SingleUser';
import Connect from './Connect/Connect';
import { useState } from 'react';

const User = () => {
    const [connect, setConnect] = useState(0);
    const handleConnect = () => {
        const newConnect = connect + 1;
        setConnect( newConnect );
    }
    return (
        <div className="user-container">
            <div>
                <Connect connect={connect}></Connect>
            </div>
            <div>
                {
                    fakeData.map( user => <SingleUser user={user} handleConnect={handleConnect} ></SingleUser> )
                }
            </div>
        </div>
    );
};

export default User;