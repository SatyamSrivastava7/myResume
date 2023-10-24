import Image from "next/image";
import { MainContainer } from "../styles/header.styles";

const Header = ({
  setSelectedHeader,
  selectedHeader,
}: {
  setSelectedHeader: any;
  selectedHeader: string;
}) => {
  const onClickHeader = (item: string) => {
    setSelectedHeader(item);
  };
  return (
    <MainContainer>
      <div className="headerIcon">
        <Image src={"/headerIcon.svg"} alt="image" height={40} width={40} />
      </div>
      <div className="menu-list">
        <div
          className={
            selectedHeader !== "home" ? "menu-options" : "selected-menu"
          }
          onClick={() => onClickHeader("home")}
        >
          Home
        </div>
        <div
          className={
            selectedHeader !== "about" ? "menu-options" : "selected-menu"
          }
          onClick={() => onClickHeader("about")}
        >
          About
        </div>
        <div
          className={
            selectedHeader !== "skills" ? "menu-options" : "selected-menu"
          }
          onClick={() => onClickHeader("skills")}
        >
          Skills
        </div>
        <div
          className={
            selectedHeader !== "contact" ? "menu-options" : "selected-menu"
          }
          onClick={() => onClickHeader("contact")}
        >
          Achievements
        </div>
      </div>
    </MainContainer>
  );
};
export default Header;
