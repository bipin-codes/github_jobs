import { ButtonProps } from "./type";
import React from "react";
import { DefaultButton } from "./Button.styles";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  isActive,
  enabled,
}) => {
  return (
    <DefaultButton
      disabled={!enabled}
      active={isActive}
      onClick={() => {
        onClick(isNaN(+label) ? -1 : +label); //if the label is not a number just pass -1 as default value, else pass the label's number value
      }}
    >
      <span>{label}</span>
    </DefaultButton>
  );
};

export default Button;
