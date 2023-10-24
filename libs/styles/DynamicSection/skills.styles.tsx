import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  color: #ffff;
  padding: 2.5rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  .experienceSection {
    width: 50%;
  }
  .skillsSection {
    width: 50%;
  }
  .icon {
    color: #ffe633;
  }
  .divider {
    display: inline-block;
    width: 2px;
    background: #ffe633;
    margin: 0px 10px;
    height: 1rem;
  }
  .experienceChild {
    margin-top: 1rem;
    padding-bottom: 1rem;
    margin-right: 2rem;
  }
  .divide {
    border-bottom: 1px solid #ffff;
    margin-right: 8rem;
  }
`;
