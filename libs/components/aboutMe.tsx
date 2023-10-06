import { Typography } from "@mui/material";
import { MainContainer } from "../styles/aboutMe.styles";

const AboutMe = () => {
  const dateOfJoining = new Date("09/15/2021");
  const monthOfExp = Date.now() - dateOfJoining.getTime(); //month difference
  const expInDateFormat = new Date(monthOfExp); //difference in date format
  const yearOfExp = expInDateFormat.getUTCFullYear(); //extract year from date
  const experience = Math.abs(yearOfExp - 1970);
  return (
    <MainContainer>
      <div className="headingWrapper">
        <Typography variant="h6" className="biography">
          BIOGRAPHY
        </Typography>
        <Typography variant="h5" className="aboutMeText">
          About Me
        </Typography>
      </div>
      <div>
        <div className="bodyWrapper">
          <Typography variant="h5" className="aboutHeader">
            Hello,
          </Typography>
          <Typography variant="body1" className="aboutBodyText">
            My name is Satyam Srivastava. I am a Web Developer, and I'm very
            passionate and dedicated to my work. With {experience}+ years
            experience as a professional Web developer, I have acquired the
            skills and knowledge necessary to make your project a success.
          </Typography>
        </div>
        <div className="expDetails">
          <div className="expChild">
            <Typography variant="h5" className="value">
              {experience} +
            </Typography>
            <Typography variant="body1" className="type">
              Years Experience
            </Typography>
          </div>
          <div className="expChild">
            <Typography variant="h5" className="value">
              10 +
            </Typography>
            <Typography variant="body1" className="type">
              Completed Projects
            </Typography>
          </div>
          <div className="expChild">
            <Typography variant="h5" className="value">
              5 +
            </Typography>
            <Typography variant="body1" className="type">
              Honors and Awards
            </Typography>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default AboutMe;
