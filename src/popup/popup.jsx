import React, { useState, useEffect } from "react";
import {
  PopUpWrapper,
  StyledTitle,
  FormRow,
  StyledLabel,
  CloseButton,
  StyledInput
} from "./styled";
import Button from "/src/button/button";

export default function PopUp({ isShow, onClose }) {
  const [nameInputState, setNameInputState] = useState("");
  const [numberInputState, setNumberInputState] = useState("");
  const [addressInputState, setAddressInputState] = useState("");

  const handlerEsc = (evt) => {
    if (evt.key === "Escape") {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerEsc);
    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
  }, []);

  const isButtonEnable =
    nameInputState && numberInputState && addressInputState;

  return isShow ? (
    <PopUpWrapper>
      <StyledTitle>Оформление</StyledTitle>
      <form>
        <FormRow>
          <StyledLabel for="name">Имя:</StyledLabel>
          <StyledInput
            type="text"
            id="name"
            value={nameInputState}
            onChange={(evt) => setNameInputState(evt.target.value)}
          />
        </FormRow>
        <FormRow>
          <StyledLabel for="number">Телефон:</StyledLabel>
          <StyledInput
            type="text"
            id="number"
            value={numberInputState}
            onChange={(evt) => setNumberInputState(evt.target.value)}
          />
        </FormRow>
        <FormRow>
          <StyledLabel for="address">Адрес доставки:</StyledLabel>
          <StyledInput
            type="text"
            id="address"
            value={addressInputState}
            onChange={(evt) => setAddressInputState(evt.target.value)}
          />
        </FormRow>
        <Button
          disabled={!isButtonEnable}
          onClick={(evt) => {
            evt.preventDefault();
            console.log(
              `${nameInputState}, спасибо за заказ. Мы доставим его как можно скорее по адресу: ${addressInputState}`
            );
          }}
        >
          Оформить
        </Button>
      </form>

      <CloseButton onClick={onClose}>X</CloseButton>
    </PopUpWrapper>
  ) : null;
}
