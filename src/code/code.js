import styled from "styled-components";

const Code = styled.p.attrs((props) => ({
  children: `Артикул: ${props.children}`
}))`
  color: ${(props) => props.theme.textColorMuted};
  font-family: ${(props) => props.theme.font};
  font-size: 12px;
  margin: 0;
  padding: 0;
`;

export default Code;
