import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _, { attempt } from 'lodash';

var ShowYourGuess;
var ShowAnswer;

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}
export default function WordCard(props){
    
    const [state, setState] = useState(prepareStateFromWord(props.value))
    ShowYourGuess = state.guess
    const activationHandler = c => { 
        console.log(`${c} has been activated.`) 
        let guess = state.guess + c
        
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('Yeah!')
                setState({...state, guess: '' ,completed: true})
                ShowAnswer = 'Correct !!'
                window.location.reload(false)
            }else{
                console.log('reset, next attempt')
                setState({...state, guess: '',attempt: state.attempt+1, completed: false})
                ShowAnswer = 'Try Again !!'
            }
        }
    }

    return (
        <div className='Text'>
            { 
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                ) 
            }
            <h1 className = 'Text'> Your Answer is : {ShowYourGuess} </h1>
            <h1 className = 'gameResult'> {ShowAnswer} </h1>
        </div>
    );
}
