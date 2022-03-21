import { useContext } from 'react'
import { AuthContext } from '../../../../context'
import { Avatar } from './Avatar'
import { Logout } from './Logout'
import { DropboxHeader, DropboxUserName, DropboxUserRole } from './styled'

export const Dropbox = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <DropboxHeader>
        <Avatar width={65} height={65} >
          <DropboxUserName>
            {user.name}
          </DropboxUserName>

          <DropboxUserRole>
            {user.role}
          </DropboxUserRole>
        </Avatar>
      </DropboxHeader>

      <Logout />
    </>
  )
}
