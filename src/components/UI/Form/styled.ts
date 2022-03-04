import styled from "styled-components";

export const StyledInput = styled.input<{ isFocused: boolean }>(
  ({ isFocused }) => `
    width: 100%;
    font-size: 1rem;
    line-height: 2rem;
    border: none;
    border-bottom: 2px solid ${isFocused ? '#1877f2' : '#555'};    
  `
)

export const InputRow = styled.fieldset`
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

export const Button = styled.button`
  width: 100%;
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