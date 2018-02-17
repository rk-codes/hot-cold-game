import React from 'react';

import Feedback from './feedback';
import Header from './header';
import GuessForm from './guess-form';
import GuessCount from './guess-count';
import GuessList from './guess-list';

import './game-card.css';

export default class GameCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message: 'Make your Guess!',
            guessList:[],
            rightAnswer: Math.round(Math.random()*100),
            showButton: true
        }
        console.log(`Right answer : ${this.state.rightAnswer}`);
    }

    onGuess(num) {
        let feedback;
        const guessNum = parseInt(num,10);
        const minValue = this.state.rightAnswer - 5;
        const maxValue = this.state.rightAnswer + 5;

        if(guessNum === this.state.rightAnswer){
            feedback = 'You Won';
            this.setState({
                showButton: false
            })
        }
        else if(guessNum < minValue || guessNum > maxValue) {
            feedback = 'Cold';
            this.setState({
                showButton: true
            })
        }
        else{
            feedback = 'Hot';
            this.setState({
                showButton: true
            })
        }

        this.setState({
            message: feedback,
            guessList: [...this.state.guessList, num]
        })
        console.log([...this.state.guessList, num]);
    }

    onNewGameClick(){
        this.setState({
            message: 'Make your Guess!',
            guessList:[],
            rightAnswer: Math.round(Math.random()*100),
            showButton: true  
        })
    }

    render() {
        

        return(
            <div className="game-board">
             <Header onNewClick={(e) => this.onNewGameClick()}/>
             <div className="game-card">  
                <Feedback message={this.state.message}/>
                <GuessForm onGuess={(num) => this.onGuess(num)} showButton={this.state.showButton}/>
                <GuessCount count={this.state.guessList.length}/>
                <GuessList guessList={this.state.guessList}/>
             </div>
            </div>        
        );
    }
  
}