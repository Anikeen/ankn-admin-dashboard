import styled from "styled-components";

export const InputRow = styled.div`
  margin-bottom: 20px;
`
export const Label = styled.label<{ hasTransition: boolean }>(
  ({ hasTransition }) => `
    display: block;
    font-size: 1.1rem;
    line-height: 1;
    transition: all .4s;
    color: ${hasTransition ? '#1877f2' : '#777'};
    transform: ${hasTransition ? 'translateY(0px)' : 'translateY(25px)'};
  `
)
export const MainInputLabel = styled.label`
  margin-bottom: 0.5rem;
  display: block;
  font-size: 1.0625rem;
  font-weight: 600;
`
export const StyledInput = styled.input<{ isFocused: boolean }>(
  ({ isFocused }) => `
    width: 100%;
    font-size: 1rem;
    line-height: 2rem;
    border: none;
    border-bottom: 2px solid ${isFocused ? '#1877f2' : '#555'};    
  `
)
interface IProps {
  isFocused: boolean;
  isInvalid: boolean | undefined;
}
export const SMainInput = styled.input<IProps>(
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
export const Warning = styled.span`
  display: inline-block;
  margin-top: 10px;
  line-height: 1;
  color: #ff4b5a;
`
export const Button = styled.button<{ width: string }>(
  ({ width }) => `
    width: ${width};
    padding: 0 35px;
    margin-top: 20px;
    line-height: 40px;
    text-transform: uppercase;
    color: #fff;
    background-color: #4272d7;
    border-radius: 3px;
    transition: background-color .3s ease;
    &:hover {
      background-color: #2f58ae;
    }    
  `
)