import React from 'react';
import './Connect.css';

const Connect = (props) => {
    return (
        <div className="connection">
            <h2>Conncetions : {props.connect} </h2>
        </div>
    );
};

export default Connect;