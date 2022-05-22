import styled from "styled-components";

export const AuthInput = styled.input<{ isFocused: boolean }>(
  ({ isFocused }) => `
    width: 100%;
    font-size: 1rem;
    line-height: 2rem;
    border: none;
    border-bottom: 2px solid ${isFocused ? '#1877f2' : '#555'};    
  `
)