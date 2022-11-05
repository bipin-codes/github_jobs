import { ButtonProps, BUTTON_TYPES_CLASSES } from "./type";
import React from "react";
import { DefaultButton, FixButton } from "./Button.styles";

const getButton = (buttonType = BUTTON_TYPES_CLASSES.paginator) => {
  const types = {
    [BUTTON_TYPES_CLASSES.fix]: FixButton,
    [BUTTON_TYPES_CLASSES.paginator]: DefaultButton,
  };
  return types[buttonType];
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  isActive,
  enabled,
  type,
}) => {
  const RequiredButton = getButton(type);
  return (
    <RequiredButton
      disabled={!enabled}
      active={isActive}
      onClick={() => {
        onClick(isNaN(+label) ? -1 : +label); //if the label is not a number just pass -1 as default value, else pass the label's number value
      }}
    >
      <span>{label}</span>
    </RequiredButton>
  );
};

export default Button;
