import React from "react";
import { StyledDisclaimer } from "./styled";

export default function Disclaimer({ count }) {
  let result;

  if (count.length === 0) {
    result = <p>Будь первым. Поделись впечатлениями</p>;
  }

  if (count.length > 5) {
    result = <StyledDisclaimer>Проверенный товар</StyledDisclaimer>;
  }

  return result;
}
