import styled from "styled-components";

interface IIcon {
  size: number;
}

export const StyledIcon = styled.span<IIcon>(({ size }) => `
  font-size: ${size}rem;
`)