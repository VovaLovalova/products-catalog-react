import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

export const ListItem = styled.li`
  border: 1px solid #000;
  width: 220px;
  margin-right: 30px;
  padding: 10px;
  text-align: center;
`;

export const CardTitle = styled.h2`
  color: #000;
`;

export const Image = styled.img`
  width: 200px;
  height: auto;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
