import { FC } from "react"
import { IUser } from '../../../../types/user'
import { Avatar } from "../Avatar/Avatar"
import styled from "styled-components";

interface IProps {
  user: IUser;
}

export const ProfileWidgetAvatar: FC<IProps> = ({ user }) => {
  return (
    <Avatar width={45} height={45} >
      <AvatarUserName>
        {user.name}
      </AvatarUserName>
    </Avatar>
  )
}

const AvatarUserName = styled.div`
  font-size: 1.125rem;
`