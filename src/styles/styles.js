import styled from "styled-components";

export const StyledMenu = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    width: 30%;
    height: 30px;
    transition: transform 100ms;

    &:hover {
      background-color: pink;
      color: black;
      transform: scale(1.05);
    }
  }
`;

export const StyledRodape = styled.footer`
  background-image: linear-gradient(black, purple);
  color: white;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
