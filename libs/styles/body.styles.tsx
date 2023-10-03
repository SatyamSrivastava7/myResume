import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  align-items: center;
  background: grey;
  grid-template-columns: auto 1fr;
  justify-conent: space-around;
  .details {
    margin: 2rem;
    gap: 1rem;
    display: grid;
  }
  .text {
    color: #ffff;
  }
  .coloredText {
    color: orange;
  }
  .aboutMe {
    background: #ffff;
    height: 100%;
  }
`;
