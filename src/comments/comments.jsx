import React from "react";
import Button from "..//button/button";
import { CommentAuthor, CommentText, CommentItem, CommentList } from "./styled";

export default function Comments({ comments, onShowMore, allCommentsLength }) {
  return (
    <>
      <CommentList>
        {comments.map((item) => (
          <CommentItem key={item.id}>
            <CommentAuthor>{item.author}</CommentAuthor>
            <CommentText>{item.text}</CommentText>
          </CommentItem>
        ))}
      </CommentList>
      {allCommentsLength > comments.length && (
        <Button onClick={onShowMore}>Показать ещё</Button>
      )}
    </>
  );
}
