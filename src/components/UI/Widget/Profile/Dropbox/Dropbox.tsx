import { useContext } from 'react'
import { AuthContext } from '../../../../../context'
import styled from "styled-components";
import { Logout } from './Logout'
import { DropboxAvatar } from './DropboxAvatar'

export const Dropbox = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header>
        <DropboxAvatar user={user} />
      </Header>

      <Logout />
    </>
  )
}

const Header = styled.div`
  padding: 25px;
  border-bottom: 1px solid #f2f2f2;
`