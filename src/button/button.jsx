import styled, { css } from "styled-components";
import { Button as ElementButton } from "/src/elements";

const Button = styled(ElementButton)`
  padding: 0;
  border: none;
  cursor: pointer;
  box-shadow: none;
  display: block;
  background-color: ${(props) => props.theme.buttonColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, box-shadow 03s;
  ${(props) => {
    const theme = props.theme.button[props.size || "medium"];

    return css`
      height: ${theme.height};
      padding-left: ${theme.padding};
      padding-right: ${theme.padding};
      font-size: ${theme.fontSize};
      border-radius: ${theme.radius};
    `;
  }}

  &:active,
  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
  }

  &:active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
  }

  &:disabled {
    background-color: ${(props) => props.theme.buttonDisabled};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
    color: #ffffff;
  }
`;

export default Button;
