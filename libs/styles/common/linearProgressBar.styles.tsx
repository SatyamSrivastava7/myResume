import styled from "styled-components";

export const MainContainer = styled.div`
  width: fit-content;
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .textColor {
    color: #ffff;
  }
  .row {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .animated-progress {
    width: 500px;
    height: 15px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    background: black;
  }

  .progress-moved .progress-bar1 {
    background-color: #ffe633;
    animation: progress1 5s forwards;
  }
  .progress-moved .progress-bar2 {
    background-color: #ffe633;
    animation: progress2 5s forwards;
  }

  .progress-moved .progress-bar3 {
    background-color: #ffe633;
    animation: progress3 5s forwards;
  }
  .progress-moved .progress-bar4 {
    background-color: #ffe633;
    animation: progress4 5s forwards;
  }

  @keyframes progress1 {
    0% {
      width: 0%;
      background: #ffe633;
    }

    100% {
      width: 90%;
      background: #ffe633;
      box-shadow: 0 0 40px #ffe633;
    }
  }

  @keyframes progress2 {
    0% {
      width: 0%;
      background: #ffe633;
    }

    100% {
      width: 85%;
      background: #ffe633;
      box-shadow: 0 0 40px #ffe633;
    }
  }

  @keyframes progress3 {
    0% {
      width: 0%;
      background: #ffe633;
    }

    100% {
      width: 75%;
      background: #ffe633;
      box-shadow: 0 0 40px #ffe633;
    }
  }
  @keyframes progress4 {
    0% {
      width: 0%;
      background: #ffe633;
    }

    100% {
      width: 50%;
      background: #ffe633;
      box-shadow: 0 0 40px #ffe633;
    }
  }
`;

export const AnimatedProgressBar = styled.div<{ width?: number }>`
  height: 100%;
  display: block;
  width: ${(props) => (props.width ? props.width : 0)}%;
  color: rgb(255, 251, 251);
  line-height: 30px;
  border-radius: 5px;
  position: absolute;
  text-align: end;
  padding-right: 5px;
  transition: 0.4s linear;
  transition-property: width, background-color;
  background-color: #ffe633;
`;
