import React from 'react';
import './guess-list.css';

export default function GuessList(props){
    const guesses = props.guessList.map((num, index) => (
        <li key={index}>
         {num}
        </li>
    ));
    return(
        <ul className="guess-list">
          <span>{guesses}</span>
        </ul>
    )
}