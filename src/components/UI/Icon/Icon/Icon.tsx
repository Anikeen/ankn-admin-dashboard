import styled from "styled-components";

interface IProps {
  size: number;
  color: string;
}

export const Icon = styled.span<IProps>(({ size, color }) => `
  font-size: ${size}rem;
  color: ${color};
`)