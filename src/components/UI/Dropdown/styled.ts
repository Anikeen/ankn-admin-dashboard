import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`
export const Toggle = styled.button`
  display: flex;
  align-items: center;
`
export const Dropbox = styled.div<{ isShown: boolean }>(({ isShown }) => `
  width: 305px;
  position: absolute;
  top: 55px ;
  right: 0;
  z-index: 3;
  transform: ${isShown ? 'scale(1)' : 'scale(0)'};
  transform-origin: right top;
  background: #fff;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / .2);
  transition: transform .4s ease;
  &::after {
    content: "";
    display: block;
    width: 19px;
    height: 19px;
    position: absolute;
    top: -17px;
    right: 33px;
    border-bottom: 9px solid #fff;
    border-top: 9px solid transparent;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
  }
`)