import { ChangeEvent, FocusEvent, ReactNode } from "react";

export interface InputProps {
  id: string;
  type: string;
  placeholder?: string;
  htmlFor: string;
  labelText?: string;
  value: string;
  onFocus: () => void;
  onChange: (e: ChangeEvent) => void;
  onBlur: (e: FocusEvent) => void;
  children?: ReactNode;
  isFocused: boolean;
}