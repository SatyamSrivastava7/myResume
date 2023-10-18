import Image from "next/image";
import { MainContainer } from "../styles/header.styles";

const Header = () => {
  return (
    <MainContainer>
      <div className="headerIcon">
        <Image src={"/headerIcon.svg"} alt="image" height={40} width={40} />
      </div>
      <div className="menu-list">
        {/* <div className="menu-options">Home</div> */}
        <div className="menu-options">About</div>
        <div className="menu-options">Services</div>
        <div className="menu-options">Portfolio</div>
        <div className="menu-options">Contact</div>
      </div>
    </MainContainer>
  );
};
export default Header;
