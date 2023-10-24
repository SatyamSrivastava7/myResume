import {
  MainContainer,
  AnimatedProgressBar,
} from "@/libs/styles/common/linearProgressBar.styles";
import { Typography } from "@mui/material";
import { useState } from "react";

const LinearProgressBar = () => {
  const [stepValue, setStepValue] = useState<number>(0);

  const progress = (itemValue: number) => {
    if (itemValue <= stepValue) {
      clearInterval(id);
    } else {
      setStepValue(stepValue + 10);
    }
  };
  let id = setInterval(progress, 500);

  return (
    <MainContainer>
      <div className="container">
        <div className="row">
          <Typography variant="body1" className="textColor">
            HTML
          </Typography>
          <Typography variant="body1" className="textColor">
            90%
          </Typography>
        </div>
        <div className="animated-progress progress-moved">
          <AnimatedProgressBar className="progress-bar1"></AnimatedProgressBar>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Typography variant="body1" className="textColor">
            CSS
          </Typography>
          <Typography variant="body1" className="textColor">
            85%
          </Typography>
        </div>
        <div className="animated-progress progress-moved">
          <AnimatedProgressBar className="progress-bar2"></AnimatedProgressBar>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Typography variant="body1" className="textColor">
            Javascript
          </Typography>
          <Typography variant="body1" className="textColor">
            75%
          </Typography>
        </div>
        <div className="animated-progress progress-moved">
          <AnimatedProgressBar className="progress-bar3"></AnimatedProgressBar>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Typography variant="body1" className="textColor">
            Typescript
          </Typography>
          <Typography variant="body1" className="textColor">
            90%
          </Typography>
        </div>
        <div className="animated-progress progress-moved">
          <AnimatedProgressBar className="progress-bar2"></AnimatedProgressBar>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Typography variant="body1" className="textColor">
            React JS
          </Typography>
          <Typography variant="body1" className="textColor">
            90%
          </Typography>
        </div>
        <div className="animated-progress progress-moved">
          <AnimatedProgressBar className="progress-bar2"></AnimatedProgressBar>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Typography variant="body1" className="textColor">
            Next JS
          </Typography>
          <Typography variant="body1" className="textColor">
            90%
          </Typography>
        </div>
        <div className="animated-progress progress-moved">
          <AnimatedProgressBar className="progress-bar2"></AnimatedProgressBar>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Typography variant="body1" className="textColor">
            Node JS
          </Typography>
          <Typography variant="body1" className="textColor">
            75%
          </Typography>
        </div>
        <div className="animated-progress progress-moved">
          <AnimatedProgressBar className="progress-bar3"></AnimatedProgressBar>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Typography variant="body1" className="textColor">
            DevOps
          </Typography>
          <Typography variant="body1" className="textColor">
            50%
          </Typography>
        </div>
        <div className="animated-progress progress-moved">
          <AnimatedProgressBar className="progress-bar4"></AnimatedProgressBar>
        </div>
      </div>
    </MainContainer>
  );
};

export default LinearProgressBar;
