import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  align-items: center;
  background: linear-gradient(to right, #343e3e, black, #343e3e);
  height: 100%;
  grid-template-columns: auto 1fr;
  justify-conent: space-around;
  .details {
    padding: 2rem;
    gap: 1rem;
    height: fit-content;
    margin: 2rem auto 2rem 2.5rem;
    background: linear-gradient(to right, #21211e, #1a1d16, #343e3e);
    display: grid;
    z-index: 999999;
  }
  .detailsHeader {
    margin: 0;
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
    background: linear-gradient(to right, #21211e, #1a1d16, #343e3e);
    height: 40rem;
    margin: 2rem 2.5rem 2rem 2rem;
    z-index: 99999;
    border: 2px solid linear-gradient(to right, #21211e, #1a1d16, #343e3e);
  }
  img {
    border-radius: 50%;
  }
  .detailsBodyWrapper {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    padding: 1rem 0;
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
