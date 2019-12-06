import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter"
import Title from "./components/Title"

function App() {
  return (
    <div>
    <div class="stars"></div>
    <div class="twinkling"></div>
      <Counter></Counter>
      <Title></Title>
    </div>
  );
}


export default App;
