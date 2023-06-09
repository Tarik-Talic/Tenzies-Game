import "../styles/Die.css";
import DieFace1 from "../assets/dice-six-faces-one.svg";
import DieFace2 from "../assets/dice-six-faces-two.svg";
import DieFace3 from "../assets/dice-six-faces-three.svg";
import DieFace4 from "../assets/dice-six-faces-four.svg";
import DieFace5 from "../assets/dice-six-faces-five.svg";
import DieFace6 from "../assets/dice-six-faces-six.svg";

export default function Die(props) {
  let dieFace = "";
  switch (props.value) {
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

  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
    scale: props.isHeld ? "1.2" : "1",
  };

  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      <img src={dieFace} />
      {/* <h2>{props.value}</h2> */}
    </div>
  );
}
