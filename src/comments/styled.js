import styled from "styled-components";

export const CommentAuthor = styled.h3`
  display: block;
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.theme.textColorMuted};
  margin-bottom: 5px;
  font-family: ${(props) => props.theme.font};
`;

export const CommentText = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.font};
`;

export const CommentItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CommentList = styled.ul`
  margin: 0;
  padding: 0;
`;
