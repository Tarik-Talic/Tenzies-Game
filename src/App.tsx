import { useEffect, useState } from 'react';
import './App.css';
import Die from './components/Die';

import { nanoid, random } from 'nanoid';
import Confetti from 'react-confetti';
import { allNewDice } from './services/generateDice';
import { rollDice } from './services/rollDice';
import { holdDice } from './services/holdDice';
import MainHeading from './components/headings/MainHeading';
import SubHeading from './components/headings/SubHeading';
import Button from './components/buttons/Button';
import DiceContainer from './components/DiceContainer';

export default function App() {
  const [dice, setDice] = useState(allNewDice);
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firsValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firsValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  return (
    <div className="App">
      <main>
        {tenzies && <Confetti />}

        <MainHeading classname="title">Tenzies</MainHeading>

        <SubHeading classname="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </SubHeading>

        <DiceContainer dice={dice} setDice={setDice} />

        <Button
          classname="roll-dice"
          onClick={() => rollDice(tenzies, setDice, setTenzies)}
        >
          {tenzies ? 'New Game' : 'Roll'}
        </Button>
      </main>
    </div>
  );
}
