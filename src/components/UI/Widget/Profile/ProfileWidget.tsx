import { useContext } from 'react'
import { AuthContext } from '../../../../context'
import { Dropdown } from "../../Dropdown/Dropdown"
import { Dropbox } from "./Dropbox"
import { Avatar } from "./Avatar"
import { ToggleUserName } from "./styled"

export const ProfileWidget = () => {

  const { user } = useContext(AuthContext);

  const avatar = (
    <Avatar width={45} height={45} >
      <ToggleUserName>
        {user.name}
      </ToggleUserName>
    </Avatar>
  )

  const dropbox = <Dropbox />

  return (
    <Dropdown
      toggle={avatar}
      dropbox={dropbox}
    />
  )
}
