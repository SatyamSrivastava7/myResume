import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: 0fr auto;
  .biography {
    color: #ffe633;
    font-weight: bold;
  }
  .aboutMeText {
    margin-top: 0.5rem;
    font-weight: 800;
    color: #ffff;
  }
  .headingWrapper {
    margin-top: 2rem;
    width: 8rem;
  }
  .bodyWrapper {
    height: fit-content;
    margin-top: 8rem;
    padding: 1rem;
    margin-right: 13rem;
    border: 5px solid #ffe633;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-style: inset;
  }
  .aboutHeader {
    font-weight: bold;
    color: #ffff;
    margin-bottom: 0.3rem;
  }
  .aboutBodyText {
    color: #ffff;
  }
  .value {
    color: #ffe633;
    font-weight: bold;
  }
  .type {
    color: #ffff;
    margin-top: 0.2rem;
  }
  .expDetails {
    display: flex;
    gap: 9rem;
    margin-top: 2rem;
  }
  .expChild {
    display: flex;
    gap: 0.5rem;
  }
`;
