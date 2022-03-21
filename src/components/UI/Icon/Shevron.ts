import styled from "styled-components";

export const Shevron = styled.span<{ isShown: boolean }>(({ isShown }) =>
  `
  display: block;
  margin-left: auto;
  font-size: 1.3rem;
  transform: ${isShown ? 'rotate(0deg)' : 'rotate(180deg)'};
  transition: transform .4s;
`)