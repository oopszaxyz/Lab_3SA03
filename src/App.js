import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "Hello";
function App() {
  return (
    <div>
      <h1 className = 'gameName'>
        Welcome to Word Spelling Game
      </h1>
      <WordCard value={word}/>
    </div>
  );
 }
 export default App;
