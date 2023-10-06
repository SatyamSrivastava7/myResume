import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  align-items: center;
  background: black;
  height: 100%;
  grid-template-columns: auto 1fr;
  justify-conent: space-around;
  .details {
    padding: 2rem;
    gap: 1rem;
    height: 100%;
    margin-top: 0;
    margin-left: 2.5rem;
    background: #21211e;
    display: grid;
    z-index: 999999;
  }
  .detailsHeader {
    margin: auto;
    width: 100%;
    padding: 10px;
  }
  .imageWrapper {
    width: 50%;
    margin: auto;
    border-radius: 50%;
  }
  .textName {
    margin: auto;
    width: 100%;
    padding: 10px;
    color: #ffff;
    display: flex;
    gap: 0.5rem;
  }
  .text {
    margin: auto;
    width: 60%;
    color: #ffff;
  }
  .coloredText {
    color: #ffe633;
  }
  .aboutMe {
    background: #181815;
    height: 100%;
    margin: 0 2.5rem;
  }
  img {
    border-radius: 50%;
  }
  .detailsBodyWrapper {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    padding: 0.5rem 0;
    border-top: 1px solid #ffff;
    border-bottom: 1px solid #ffff;
  }
  .aboutYou {
    display: flex;
    justify-content: space-between;
  }
  .sub-head {
    color: #ffff;
  }
  .sub-value {
    color: #ffff;
  }
`;
