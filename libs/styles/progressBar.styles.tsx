import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  align-items: center;
  margin: auto;
  .row {
    display: flex;
    gap: 1.5rem;
    margin-top: 0.5rem;
    margin: auto;
    width: 100%;
    padding: 10px;
  }
  .title {
    color: #ffff;
    display: grid;
    padding-left: 1rem;
    padding-top: 0.5rem;
  }
  .progress {
    width: 5rem;
    height: 5rem;
    line-height: 150px;
    background: none;
    margin: 0 auto;
    box-shadow: none;
    position: relative;
  }
  .progress:after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 0.5rem solid black;
    position: absolute;
    top: 0;
    left: 0;
  }
  .progress > span {
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1;
  }
  .progress .progress-left {
    left: 0;
  }
  .progress .progress-bar {
    width: 100%;
    height: 100%;
    background: none;
    border-width: 0.6rem;
    border-style: solid;
    position: absolute;
    top: 0;
  }
  .progress .progress-left .progress-bar {
    left: 100%;
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
    border-left: 0;
    -webkit-transform-origin: center left;
    transform-origin: center left;
  }
  .progress .progress-right {
    right: 0;
  }
  .progress .progress-right .progress-bar {
    left: -100%;
    border-top-left-radius: 80px;
    border-bottom-left-radius: 80px;
    border-right: 0;
    -webkit-transform-origin: center right;
    transform-origin: center right;
    animation: loading-1 1.8s linear forwards;
  }
  .progress .progress-value {
    height: 100%;
    padding-left: 1.3rem;
    font-size: 16px;
    color: rgb(250, 245, 245);
    display: flex;
    margin: auto;
    align-items: center;
    position: absolute;
  }
  .progress.yellow1 .progress-bar {
    border-color: #ffe633;
  }
  .progress.yellow1 .progress-left .progress-bar {
    animation: loading-1 1s linear forwards 1.8s;
  }
  .progress.yellow2 .progress-bar {
    border-color: #ffe633;
  }
  .progress.yellow2 .progress-left .progress-bar {
    animation: loading-2 1s linear forwards 1.8s;
  }

  @keyframes loading-1 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }
  @keyframes loading-2 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(145deg);
      transform: rotate(145deg);
    }
  }
  @media only screen and (max-width: 990px) {
    .progress {
      margin-bottom: 20px;
    }
  }
`;
