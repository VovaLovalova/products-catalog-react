import styled from "styled-components";

const Price = styled.span.attrs((props) => ({
  children: `${props.value}`
}))`
  font-size: 28px;
  font-weight: bold;
  line-height: 1;
  color: ${(props) => props.theme.textColor};
  margin-left: ${(props) => props.theme.indent};
`;

export default Price;
