import React from "react";
import Button from "..//button/button";
import { StyledCounter, Value } from "./styled";

export default function Counter({ value, onChange, minValue }) {
  const isDisabledMinus = value === minValue;
  return (
    <StyledCounter>
      <Button
        disabled={isDisabledMinus}
        size="small"
        onClick={() => onChange && onChange(value - 1)}
      >
        -
      </Button>
      <Value
        value={value}
        size={1}
        onChange={(e) => {
          const value = Number(e.target.value);
          onChange(value < minValue ? minValue : value);
        }}
      />
      <Button size="small" onClick={() => onChange && onChange(value + 1)}>
        +
      </Button>
    </StyledCounter>
  );
}
