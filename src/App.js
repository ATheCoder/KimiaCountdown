import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter"

function App() {
  return (
    <div>
      <Counter></Counter>
      <div style={style.title}>
        Until Kimia reaches Tehran
      </div>
    </div>
  );
}

const style = {
  title: {
    position: "relative",
    fontSize: 50,
    left: "1100px",
    bottom: "80px",
    color: "#85144b",
    fontWeight: 700
  }
}

export default App;
