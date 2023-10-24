import { MainContainer } from "@/libs/styles/DynamicSection/skills.styles";
import LinearProgressBar from "../common/linearProgressBar";
import { Typography } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WorkIcon from "@mui/icons-material/Work";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const SkillSection = () => {
  return (
    <MainContainer>
      <div className="experienceSection">
        <Typography variant="h5">Experience</Typography>
        <div className="experienceChild">
          <div>
            <ApartmentIcon className="icon" /> A.P. Mollar - Maersk
          </div>
          <div className="divider"></div>
          <div>
            <WorkIcon className="icon" /> Associate Software Engineer
          </div>
          <div style={{ margin: "0.5rem 1.5rem" }}>
            <CalendarMonthIcon className="icon" /> Jun 2022 - Present
          </div>

          <div className="divider"></div>
          <div>
            <WorkIcon className="icon" /> Software Development Internship
          </div>
          <div style={{ margin: "0.5rem 1.5rem" }}>
            <CalendarMonthIcon className="icon" /> Nov 2021 - Jun 2022
          </div>
        </div>
        <div className="divide"></div>
        <div className="experienceChild">
          <div>
            <ApartmentIcon className="icon" /> National Service Scheme, NIT
            Jamshedpur
          </div>
          <div className="divider"></div>
          <div>
            <WorkIcon className="icon" /> President
          </div>
          <div style={{ margin: "0.5rem 1.5rem" }}>
            <CalendarMonthIcon className="icon" /> May 2021 - May 2022
          </div>
          <div className="divider"></div>
          <div>
            <WorkIcon className="icon" />
            General Secretary
          </div>
          <div style={{ margin: "0.5rem 1.5rem" }}>
            <CalendarMonthIcon className="icon" /> May 2020 - May 2021
          </div>

          <div className="divider"></div>
          <div>
            <WorkIcon className="icon" /> Volunteer
          </div>
          <div style={{ margin: "0.5rem 1.5rem" }}>
            <CalendarMonthIcon className="icon" /> Oct 2018 - May 2020
          </div>
        </div>
      </div>

      <div className="skillsSection">
        <Typography variant="h5">Personal Skills</Typography>
        <LinearProgressBar />
      </div>
    </MainContainer>
  );
};

export default SkillSection;
