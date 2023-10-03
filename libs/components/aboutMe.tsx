import { Typography } from "@mui/material";
import { MainContainer } from "../styles/aboutMe.styles";

const AboutMe = () => {
    const dateOfJoining = new Date("06/13/2022");
    const monthOfExp = Date.now() - dateOfJoining.getTime(); //month difference
    const expInDateFormat = new Date(monthOfExp); //difference in date format
    const yearOfExp = expInDateFormat.getUTCFullYear(); //extract year from date
    const monthOfExperience = expInDateFormat.getUTCMonth() > 1 ? expInDateFormat.getUTCMonth() + " months" : expInDateFormat.getUTCMonth() + " month";
    const experience = Math.abs(yearOfExp - 1970) > 1 ? Math.abs(yearOfExp - 1970) + " years" : Math.abs(yearOfExp - 1970) + " year";

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
      <div className="bodyWrapper">
        <Typography variant="body1" className="aboutHeader">
          I'm Satyam Srivastava and Web Developer
        </Typography>
        <Typography variant="body2" >
        Hi! I am a Web Developer, and I'm very passionate and dedicated to my work. With {experience} and {monthOfExperience} experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.
        </Typography>
        
      </div>
    </MainContainer>
  );
};

export default AboutMe;
