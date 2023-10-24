import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: fit-content;
  background: #21211e;
  padding: 1rem;
  border-bottom: 1px solid #21211e;
  z-index: 99999;

  .menu-list {
    display: grid;
    gap: 1rem;
    padding-top: 0.5rem;
    padding-right: 1.5rem;
    grid-template-columns: repeat(5, 1fr);
  }

  .menu-options {
    color: #ffff;
    &:hover {
      cursor: pointer;
    }
  }
  .selected-menu {
    color: #ffe633;
    &:hover {
      cursor: pointer;
    }
  }

  .headerIcon {
    margin-left: 1rem;
  }
`;
