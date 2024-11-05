import styled from "styled-components";

interface LoadScreenStyledProps {
  stop: boolean;
}

export const LoadScreenStyled = styled.section<LoadScreenStyledProps>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #f3f3f3;
  width: 100svw;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: background-color 1s ease;

  background-color: ${(props) => (props.stop ? "transparent" : "#f3f3f3")};

  #logoLoader {
    width: 125px;
    height: auto;
    opacity: ${(props) => (props.stop ? 0 : 1)};

    animation: ${(props) =>
      props.stop
        ? "fadeOut 1s forwards"
        : "fadeAndSpin 2s forwards, rotate 4s linear infinite"};

    @keyframes fadeAndSpin {
      0% {
        width: 0px;
        opacity: 0;
      }
      50% {
        width: 150px;
      }
      100% {
        width: 125px;
        opacity: 1;
      }
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
        transform: rotate(0deg);
      }
      100% {
        width: 0px;
        opacity: 0;
        transform: rotate(360deg);
      }
    }
  }
`;
