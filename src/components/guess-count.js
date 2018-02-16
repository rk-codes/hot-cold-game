import React from 'react';
import './guess-count.css';

export default function GuessCount(props){
    return(
        <div className="guess-count">
            <p>Guess # <span>{props.count}</span></p>
        </div>
    )
}