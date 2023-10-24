import { MainContainer } from "@/libs/styles/DynamicSection/achievements.styles";
import { Typography } from "@mui/material";

const Achievements = () => {
  return (
    <MainContainer>
      <div>
        <Typography variant="h5">Awards</Typography>
        <div>- Going Extra Mile Award</div>
        <div>A.P. Mollar - Maersk</div>
        <div>Issued: Apr 2023</div>
        <div>- Going Extra Mile Award</div>
        <div>A.P. Mollar - Maersk</div>
        <div>Issued: Oct 2022</div>

        <div>Visit my linkedIn profile for more information</div>
      </div>
    </MainContainer>
  );
};

export default Achievements;
