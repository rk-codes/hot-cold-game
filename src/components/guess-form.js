import React from 'react';
import './guess-form.css';

export default class GuessForm extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    handleSubmit(event){
        event.preventDefault();
        const num = this.numInput.value
        console.log(num);
        if(num && this.props.onGuess) {
            this.props.onGuess(num);
        }
        this.numInput.value = '';
    }
    render() {
        return(
            <form className="guess-form" onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" placeholder="Enter your Guess" ref={(input) => this.numInput = input}/>
                <button type="submit">Guess</button>
            </form>      
         );
    }
   
}