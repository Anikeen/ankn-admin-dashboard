import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div<{ background: string; opacity: number; }>(
  ({ background, opacity }) => `
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: ${background};
    opacity: ${opacity};
  `
)
export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const Container = styled.div`
  position: relative;  
  height: 10px;
  width: 75px;
`
const rotate1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  } 
`
const rotate2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`
const rotate3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

export const Ellipse = styled.div<{ background: string }>(
  ({ background }) => `
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${background};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  `
)

export const AnimEllipse = styled(Ellipse)`
  &:nth-child(1) {
    left: 8px;
    animation: ${rotate1} 0.6s infinite;
  }
  &:nth-child(2) {
    left: 8px;
    animation: ${rotate2} 0.6s infinite;
  }
  &:nth-child(3) {
    left: 32px;
    animation: ${rotate2} 0.6s infinite;
  }
  &:nth-child(4) {
    left: 56px;
    animation: ${rotate3} 0.6s infinite;
  }
`