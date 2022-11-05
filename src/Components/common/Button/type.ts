export const BUTTON_TYPES_CLASSES = {
  paginator: "paginator",
  fix: "fix",
};

export type ButtonProps = {
  onClick: (index: number) => void;
  label: string;
  isActive: boolean;
  enabled: boolean;
  type: string;
};
