import styled from "styled-components";
import { P } from "/src/elements";
import Button from "/src/button/button";

export const StyledProductPage = styled.section`
  margin: ${(props) => props.theme.indent};
  padding: ${(props) => props.theme.indent};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: 'Arial, "Helvetica", sans-serif';
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
  position: relative;
`;

export const Header = styled.header`
  margin-bottom: ${(props) => props.theme.indent};
`;

export const ProductWrapper = styled.section`
  display: flex;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const ProductInfo = styled.div`
  margin-left: ${(props) => props.theme.indent};
  border-left: 1px solid #888;
  box-sizing: border-box;
  padding-left: ${(props) => props.theme.indent};
  margin-bottom: ${(props) => props.theme.indent};
`;

export const ProductInfoLine = styled(P)`
  color: #666;
  font-size: 18px;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const BuyButton = styled(Button)`
  margin-top: 40px;
`;
