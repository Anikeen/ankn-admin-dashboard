import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
  overflow: hidden;
`
export const STable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
`
export const HeaderRow = styled.tr`
  color: #fff;
  background-color: #444;
`
export const ColumnHeader = styled.th`
  padding: 20px;
  line-height: 1;
  font-weight: 400;
  text-align: left;
  vertical-align: middle;
  white-space: nowrap;
`
export const Cell = styled.td`
  padding: 12px 20px;
`