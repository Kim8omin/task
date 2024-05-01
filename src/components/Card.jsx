import {
  CardComponentLayer,
  CardLayer,
  CardWrapper,
  Front,
  Back,
  BackImage,
} from "../styles/Style";
import { useState } from "react";
import apple from "../assets/apple.png";

function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardComponentLayer>
      <CardLayer>
        <CardWrapper
          className={isFlipped ? "flipped" : ""}
          onClick={handleClick}
        >
          <Front>
            <p>Alphabet</p>
            <h2>A</h2>
          </Front>
          <Back>
            <BackImage src={apple} alt="apple card" />
          </Back>
        </CardWrapper>
      </CardLayer>
    </CardComponentLayer>
  );
}

export default Card;
