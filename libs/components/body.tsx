import Image from "next/image";
import { MainContainer } from "../styles/body.styles";
import { Typography } from "@mui/material";
import AboutMe from "./aboutMe";

const Body = () => {
  return (
    <MainContainer>
      <div className="details">
        <Image src={"/next.svg"} alt={"Satyam Pic"} width={150} height={150} />

        <Typography variant="h5" className="text">
          SATYAM <div className="coloredText">SRIVASTAVA</div>{" "}
        </Typography>
        <div className="text">I'm a Software Engineer</div>
      </div>
      <div className="aboutMe">
        <AboutMe/>
      </div>
    </MainContainer>
  );
};

export default Body;
