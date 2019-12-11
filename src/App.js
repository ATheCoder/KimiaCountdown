import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter"
import Title from "./components/Title"
import Flight from "./components/Flight"

function App() {
  return (
    <div>
    <div class="stars"></div>
    <div class="twinkling"></div>
      <Counter></Counter>
      <Title></Title>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Flight timeToFlight={ Date.UTC("2019", "11", "11", "23", "45") } flightFinish={ Date.UTC("2019", "11", "12", "07", "35") } id="1" from="MONTREAL, CANADA" to="VIENNA, AUSTRIA" flightCode="AUA74"></Flight>
        <Flight timeToFlight={ Date.UTC("2019", "11", "12", "12", "10") } flightFinish={ Date.UTC("2019", "11", "12", "16", "30") } id="2" from="VIENNA, AUSTRIA" to="TEHRAN, IRAN" flightCode="AUA871"></Flight>
      </div>
    </div>
  );
}


export default App;
