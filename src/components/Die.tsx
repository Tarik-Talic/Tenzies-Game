import '../styles/Die.css';
import {
  DieFace1,
  DieFace2,
  DieFace3,
  DieFace4,
  DieFace5,
  DieFace6,
} from '../assets';
import {
  SelectedDieFace1,
  SelectedDieFace2,
  SelectedDieFace3,
  SelectedDieFace4,
  SelectedDieFace5,
  SelectedDieFace6,
} from '../assets';
interface DieProps {
  isHeld: boolean;
  value: number;
  img: any;
  holdDice: () => void;
}
export default function Die({ value, isHeld, holdDice }: DieProps) {
  let dieFace = '';
  switch (value) {
    case 1:
      dieFace = DieFace1;
      break;
    case 2:
      dieFace = DieFace2;
      break;
    case 3:
      dieFace = DieFace3;
      break;
    case 4:
      dieFace = DieFace4;
      break;
    case 5:
      dieFace = DieFace5;
      break;
    case 6:
      dieFace = DieFace6;
      break;
    default:
      break;
  }

  let holdDieFace = '';
  switch (value) {
    case 1:
      holdDieFace = SelectedDieFace1;
      break;
    case 2:
      holdDieFace = SelectedDieFace2;
      break;
    case 3:
      holdDieFace = SelectedDieFace3;
      break;
    case 4:
      holdDieFace = SelectedDieFace4;
      break;
    case 5:
      holdDieFace = SelectedDieFace5;
      break;
    case 6:
      holdDieFace = SelectedDieFace6;
      break;
    default:
      break;
  }

  const styles = {
    scale: isHeld ? '1.2' : '1',
  };

  return (
    <div className="die-face" style={styles} onClick={holdDice}>
      <img src={isHeld ? holdDieFace : dieFace} />
    </div>
  );
}
