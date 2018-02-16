import React from 'react';
import './header.css';

export default function Header(props) {
    return(
        <div className="header">
            <nav>
                <ul>
                    <li><a href="#" className="what">WHAT?</a></li>
                    <li><a href="#" className="new" onClick={(e) => props.onNewClick()}>+NEW GAME</a></li>
                </ul>
            </nav>
            <h1>HOT or COLD</h1>
        </div>
    )
}