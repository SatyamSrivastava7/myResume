import { MainContainer } from "../../styles/common/circularProgressBar.styles";

const ProgressBar = () => {
  return (
    <MainContainer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="progress yellow1">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">100%</div>
            </div>
            <div className="title">Hindi</div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="progress yellow2">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">90%</div>
            </div>
            <div className="title">English</div>
          </div>
        </div>
      </div>
      <div className="horizontalBarSection"></div>
    </MainContainer>
  );
};

export default ProgressBar;
