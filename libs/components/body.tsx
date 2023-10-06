import { MainContainer } from "../styles/body.styles";
import { Typography } from "@mui/material";
import AboutMe from "./aboutMe";
import ProgressBar from "./progressBar";

const Body = () => {
  const dateOfJoining = new Date("10/16/2000");
  const monthOfExp = Date.now() - dateOfJoining.getTime(); //month difference
  const expInDateFormat = new Date(monthOfExp); //difference in date format
  const yearOfExp = expInDateFormat.getUTCFullYear(); //extract year from date
  const age = Math.abs(yearOfExp - 1970);
  return (
    <MainContainer>
      <div className="details">
        <div className="detailsHeader">
          <div className="imageWrapper">
            <img
              src={"/Satyam.jpg"}
              alt={"Satyam Pic"}
              width={150}
              height={150}
            />
          </div>

          <Typography variant="h5" className="textName">
            SATYAM <div className="coloredText"> SRIVASTAVA </div>
          </Typography>
          <div className="text">Front-end Developer</div>
          <div className="text">Software Engineer</div>
        </div>
        <div className="detailsBodyWrapper">
          <div className="aboutYou">
            <div className="sub-head">Residence :</div>
            <div className="sub-value">India</div>
          </div>
          <div className="aboutYou">
            <div className="sub-head">City :</div>
            <div className="sub-value">Prayagraj</div>
          </div>
          <div className="aboutYou">
            <div className="sub-head">Age :</div>
            <div className="sub-value"> {age}</div>
          </div>
        </div>
        <ProgressBar />
      </div>

      <div className="aboutMe">
        <AboutMe />
      </div>
    </MainContainer>
  );
};

export default Body;
