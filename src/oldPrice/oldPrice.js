import styled from "styled-components";

const OldPrice = styled.del.attrs((props) => ({
  children: `${props.value}`
}))`
  font-size: 18px;
  color: ${(props) => props.theme.textColorMuted};
  line-height: 1;
  margin-left: ${(props) => props.theme.indent};
`;

export default OldPrice;
