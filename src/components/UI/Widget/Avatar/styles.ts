import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
interface IUserpic {
  width: number;
  height: number;
}

export const Userpic = styled.div<IUserpic>(({ width, height }) => `
  width: ${width}px;
  height: ${height}px;
  border-radius: 3px;
  overflow: hidden;
  background-color: #ccc;
`)
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
export const UserInfo = styled.div`
  padding-left: 15px;
  padding-right: 5px;
  font-weight: 600;
  text-transform: capitalize;
  color: #333;
`