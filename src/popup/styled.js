import styled from "styled-components";
import { H1 as ElementTitle } from "/src/elements";
import Button from "/src/button/button";

export const PopUpWrapper = styled.div`
  margin: 60px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  padding: 20px;
  z-index: 10;
`;

export const StyledTitle = styled(ElementTitle)`
  font-family: ${(props) => props.theme.font};
  margin-bottom: 20px;

  &::after {
    content: "";
    position: absolute;
    width: 96%;
    height: 2px;
    background-color: ${(props) => props.theme.textColor};
    top: 50px;
    left: 12px;
  }
`;

export const FormRow = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

export const StyledLabel = styled.label`
  font-family: ${(props) => props.theme.font};
  font-size: 18px;
  min-width: 30%;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 6px;
  right: 20px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
`;

export const StyledInput = styled.input`
  width: 30%;
`;
