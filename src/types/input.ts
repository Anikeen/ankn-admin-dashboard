import { ChangeEvent, FocusEvent } from "react";

export interface InputLabelProps {
  htmlFor: string;
  labelText?: string;
  value: string;
  isFocused: boolean;
}

export interface InputProps {
  id: string;
  name?: string;
  type: string;
  placeholder?: string;
  value: string;
  onFocus: () => void;
  onChange: (e: ChangeEvent) => void;
  onBlur: (e: FocusEvent) => void;
}