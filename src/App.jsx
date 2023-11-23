import { useState, useEffect } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Die from "./components/Die";
import Button from "./components/Button";
function App() {
  function generateNewDie () {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }
  } 

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [counter, setCounter] = useState(0)

  function rollDice() {
    if(tenzies) {
      setDice(allNewDice())
      setTenzies(false)
      setCounter(0)
    }
    else {
    setDice(prevState => prevState.map(die => {
     return die.isHeld ? die : generateNewDie();}
    ))
    setCounter(prevState => prevState + 1)
    }
  }

  function holdDice(id) {
 setDice(prevState => prevState.map(die => die.id=== id ? {...die, isHeld: true} : die))
}

function reset () {
  setDice(allNewDice())
  setCounter(0)
}

useEffect(() => {
    const allHeld = dice.every(die => die.isHeld === true);
    const firstValue = dice[0].value
    const allValues = dice.every(die => die.value === firstValue)
    if( allHeld && allValues) {
      setTenzies(true)
    }
}, 
  [dice])


  return (
    <main>
      <Header />
      <div className="die-container">
        {dice.map((die) => (
          <Die
            value={die.value}
            key={die.id}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
          />
        ))}
      </div>
      <Button handleClick={rollDice} tenzies={tenzies} reset={reset} />
      <p>Roll Counter: {counter}</p>
    </main>
  );
}

export default App;
