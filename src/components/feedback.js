import React from 'react';
import './feedback.css';

export default function Feedback(props){
    return(
        <div className="feedback">
            <h3>{props.message}</h3>
        </div>
    )
}