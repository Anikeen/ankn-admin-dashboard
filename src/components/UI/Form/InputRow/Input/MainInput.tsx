import styled from "styled-components";

interface IProps {
  isFocused: boolean;
  isInvalid: boolean | undefined;
}
export const MainInput = styled.input<IProps>(
  ({ isFocused, isInvalid }) => `
    width: 100%;
    padding-left: 15px;
    line-height: 40px;
    border-radius: 3px;
    border: 1px solid ${isFocused ? '#1877f2' : isInvalid ? '#ff4b5a' : '#ccc'}; 
    &::placeholder {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      color: #999;
      transition: padding .4s, opacity .4s;
    }
    &:focus::placeholder {
      padding-left: 20px;
      opacity: 0;
    }   
  `
)