import styled from "styled-components";

export const StyledDescription = styled.p`
  font-family: ${(props) => props.theme.font};
  margin: 0;
  margin-bottom: ${(props) => props.theme.indent};
`;
