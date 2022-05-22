import { FC } from "react"
import { InputProps } from "../../../../../types/input"

export const Input: FC<InputProps> = ({
  id,
  name,
  value,
  type,
  placeholder,
  onFocus,
  onChange,
  onBlur,
}) => {
  return (
    <input
      id={id}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onFocus={onFocus}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}