import Die from './Die';
import { holdDice } from '../services/holdDice';
type DiceContainerProps = {
  dice: {
    value: number;
    isHeld: boolean;
    id: string;
  }[];
  setDice: React.Dispatch<
    React.SetStateAction<
      {
        value: number;
        isHeld: boolean;
        id: string;
      }[]
    >
  >;
};

export default function DiceContainer({ dice, setDice }: DiceContainerProps) {
  return (
    <div className="diceContainer">
      {dice.map((die) => (
        <Die
          key={die.id}
          isHeld={die.isHeld}
          value={die.value}
          img={'DieFace' + die.value}
          holdDice={() => holdDice(die.id, setDice)}
        />
      ))}
    </div>
  );
}
