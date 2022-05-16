import styled from "styled-components";

interface IImage {
  width: number;
  height: number;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Image = styled.div<IImage>(({ width, height }) => `
  width: ${width}px;
  height: ${height}px;
  border-radius: 3px;
  overflow: hidden;
  background-color: #ccc;
`)

export const Userpic = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const User = styled.div`
  padding-left: 15px;
  padding-right: 5px;
  font-weight: 600;
  text-transform: capitalize;
  color: #333;
`
export const AvatarUserName = styled.div`
  font-size: 1.125rem;
`

export const DropboxUserName = styled.div`
  font-size: 1.3rem;
`

export const DropboxUserRole = styled.div`
  margin-top: 5px;
  font-size: .875rem;
  color: #999;
`

export const DropboxHeader = styled.div`
  padding: 25px;
  border-bottom: 1px solid #f2f2f2;
`

export const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 25px;
  font-size: 1.125rem;
  color: #333;
  transition: color .4s,background-color .4s;
  &:hover {
    color: #fff;
    background-color: #4272d7;
  }
`