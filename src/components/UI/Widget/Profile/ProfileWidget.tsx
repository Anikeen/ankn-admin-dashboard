import { useContext } from 'react'
import { AuthContext } from '../../../../context'
import { Dropdown } from "../../Dropdown/Dropdown"
import { Dropbox } from "./Dropbox/Dropbox"
import { ProfileWidgetAvatar } from './ProfileWidgetAvatar'

export const ProfileWidget = () => {
  const { user } = useContext(AuthContext);

  const avatar = <ProfileWidgetAvatar user={user} />
  const dropbox = <Dropbox />

  return (
    <Dropdown toggle={avatar} dropbox={dropbox} />
  )
}
