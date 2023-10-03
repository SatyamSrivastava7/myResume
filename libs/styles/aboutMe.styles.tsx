import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: 0fr auto;
  .biography {
    color: orange;
    font-weight: bold;
  }
  .aboutMeText {
    margin-top: 0.5rem;
    font-weight: 800;
  }
  .headingWrapper{
    width: 8rem;
  }
  .bodyWrapper {
    height: 100%;
    width: 100%;
    margin-top: 5rem;
    padding: 1rem;
    padding-right: 15rem;
  }
  .aboutHeader {
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
`;
