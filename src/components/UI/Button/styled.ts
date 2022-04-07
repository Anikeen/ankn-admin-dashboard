import styled from "styled-components";

interface IProps {
  width: string;
  color: string;
  background: string;
  hoverBackground: string;
}

export const Button = styled.button<IProps>(
  ({ width, color, background, hoverBackground }) => `
    width: ${width};
    padding: 0 35px;
    line-height: 40px;
    text-transform: uppercase;
    color: ${color};
    background-color: ${background};
    border-radius: 3px;
    transition: background-color .3s ease;
    &:hover {
      background-color: ${hoverBackground};
    }    
  `
)