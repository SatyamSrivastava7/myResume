import { MainContainer } from "@/libs/styles/DynamicSection/home.styles";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <MainContainer>
      <div className="area">
        <Typography variant="h3" className="mainHeadText">
          Discover my Amazing Art Space!
        </Typography>
        <Typography variant="h5" className="codeTextColor">
          {" "}
          <div className="codeText">&lt;code&gt; </div> &nbsp; I build web
          interfaces. &nbsp;
          <div className="codeText">&lt;/code&gt;</div>{" "}
        </Typography>
      </div>
    </MainContainer>
  );
};

export default Home;
