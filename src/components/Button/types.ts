import { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  type?: "button" | "submit" | "reset";
  styleType?: "primary" | "danger" | "clear";
}
