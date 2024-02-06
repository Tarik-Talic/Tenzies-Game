import { generateNewDie, allNewDice } from './generateDice';

type setDice = React.Dispatch<
  React.SetStateAction<
    {
      value: number;
      isHeld: boolean;
      id: string;
    }[]
  >
>;
type setTenzies = React.Dispatch<React.SetStateAction<boolean>>;

export const rollDice = (
  tenzies: boolean,
  setDice: setDice,
  setTenzies: setTenzies
) => {
  if (!tenzies) {
    setDice((oldDice: any) =>
      oldDice.map((die: any) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  } else {
    setTenzies(false);
    setDice(allNewDice());
  }
};
