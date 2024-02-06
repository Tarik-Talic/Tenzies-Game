
export function holdDice(id: string, setDice: any) {
  setDice((oldDice: any) =>
    oldDice.map((die: any) => {
      return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
    })
  );
}
