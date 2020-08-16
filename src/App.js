import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

var hint;
var word;
var Random = Math.floor(Math.random() * 3) + 1;

if (Random == 1){
  word = "Hello";
  hint = "The words that you say when greeting";
  
}
if (Random == 2){
  word = "Lions";
  hint = "The king of forest and more then one";
}
if (Random == 3){
  word = "Orange";
  hint ="The results are round and the name is the same as the color.";
}


function App() {
  return (
    <div>
      <h1 className = 'gameName'>
        Welcome to Word Spelling Game
      </h1>

      <h1 className = 'gameHint'>
        Hint : {hint}
      </h1>

      <WordCard value={word}/>

    </div>
  );
 }

 export default App;
