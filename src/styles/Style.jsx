import styled from "styled-components";

export const LayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
`;

export const CardLayer = styled.div`
  width: 200px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  perspective: 1000px;
`;

export const CardWrapper = styled.div`
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

export const Front = styled.div`
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

export const Back = styled.div`
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

export const BackImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
