import { Typography } from "@mui/material";
import { MainContainer } from "../../styles/DynamicSection/aboutMe.styles";
import RedeemIcon from "@mui/icons-material/Redeem";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SchoolIcon from "@mui/icons-material/School";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

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
      <div style={{ marginRight: "12rem" }}>
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
          <div className="expChild">
            <RedeemIcon className="iconColor" />
            <Typography variant="body1" className="aboutBodyText">
              Birthday:{" "}
            </Typography>
            <Typography variant="body1" className="aboutBodyText">
              16.10.2000
            </Typography>
          </div>
          <div className="expChild">
            <LocalLibraryIcon className="iconColor" />
            <Typography variant="body1" className="aboutBodyText">
              Study:{" "}
            </Typography>
            <Typography variant="body1" className="aboutBodyText">
              National Institute of Technology, Jamshedpur
            </Typography>
          </div>
          <div className="expChild">
            <SchoolIcon className="iconColor" />
            <Typography variant="body1" className="aboutBodyText">
              Degree:{" "}
            </Typography>
            <Typography variant="body1" className="aboutBodyText">
              B.Tech (Hons.)
            </Typography>
          </div>
          <div className="expChild">
            <SportsEsportsIcon className="iconColor" />
            <Typography variant="body1" className="aboutBodyText">
              Interests:{" "}
            </Typography>
            <Typography variant="body1" className="aboutBodyText">
              Chess, Badminton, Reading
            </Typography>
          </div>
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
