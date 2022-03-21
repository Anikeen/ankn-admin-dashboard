import styled from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

export const Item = styled.div<{ width: number }>(({ width }) => `
  flex-basis: ${width}%;
  padding-right: 15px;
  padding-left: 15px;
`)