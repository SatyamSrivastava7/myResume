import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 3rem 0.2rem;
  gap: 2rem;
  background: #4b4b48;
  margin: 2.5rem auto 0 2.5rem;
  bottom: 2.3rem;
  width: 20.5%;
  position: absolute;
  .icon {
    height: fit-content;
    border-radius: 40px;
    &:hover {
      background: #ffff;
      cursor: pointer;
    }
  }
`;
