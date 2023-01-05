import styled from "styled-components";
import P from "..//elements/p";

export const StyledDisclaimer = styled(P)`
  color: green;
  margin: ${(props) => props.theme.indent} 6px;
`;
