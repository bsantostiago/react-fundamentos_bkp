import styled from "styled-components";

const StyledContainer = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  hr {
    border: none;
    border-bottom: outset 1px;
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1;
  }
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
