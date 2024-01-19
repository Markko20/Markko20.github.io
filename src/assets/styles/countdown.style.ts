import styled, {keyframes} from 'styled-components';

export const Input = styled.input`
    padding: 10px;
    margin-right: 15px;
    margin-bottom: 15px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s;
    max-width: 150px;

    &:focus {
        border-color: #007bff;
    }
`;

export const rotateGradientAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const TimerContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #e0e0e0;
  position: relative;
  overflow: hidden;
`;

export const TimerBorder = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 4px solid transparent;
  border-image: linear-gradient(to right, #333, #e0e0e0);
  border-image-slice: 90;
  animation: ${rotateGradientAnimation} 5s infinite;
`;

export const TimerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimerNumber = styled.span`
  font-size: 2em;
  color: #333;
  font-weight: bold;
`;

