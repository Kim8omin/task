import styled from "styled-components";

const CardComponentLayer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 30%;
`;

const CardLayer = styled.div`
  width: 200px;
  height: 400px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  perspective: 1000px;
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.5s;
  perspective-origin: center;
  transform-style: preserve-3d;
  color: white;
  font-size: 30px;
  cursor: pointer;

  &.flipped {
    transform: rotateY(180deg);
  }
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  backface-visibility: hidden;
  background-color: pink;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  p,
  h2 {
    margin: 0;
  }
`;

const Back = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: pink;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
`;

const BackImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const LayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-height: 50%;
  margin-top: 30px;
  padding: 10px;

  h2 {
    font-size: 1.8rem;

    @media (max-height: 570px) {
      display: none;
    }
  }
`;

export {
  CardComponentLayer,
  CardLayer,
  CardWrapper,
  Front,
  Back,
  BackImage,
  LayerWrapper,
};
