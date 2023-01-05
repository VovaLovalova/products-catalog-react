import React from "react";
import Button from "..//button/button";
import { StyledDescription } from "./styled";

export default function Description({
  text,
  onShowMore,
  isShowAllDescription
}) {
  return (
    <>
      <StyledDescription>{text}</StyledDescription>
      <Button size="medium" onClick={onShowMore}>
        {isShowAllDescription ? "Cкрыть" : "Подробнее"}
      </Button>
    </>
  );
}
