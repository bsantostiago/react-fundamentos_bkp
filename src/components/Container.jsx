import styled from "styled-components";

const StyledContainer = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  p {
    line-height: 1;
  }
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
