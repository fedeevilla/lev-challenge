import { ReactNode } from "react";

export interface IButton {
  ariaLabel: string;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  id?: string;
  type?: "button" | "submit" | "reset";
  styleType?: "primary" | "danger" | "clear" | "success";
}
