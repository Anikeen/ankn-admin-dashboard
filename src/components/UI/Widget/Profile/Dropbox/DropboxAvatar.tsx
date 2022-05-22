import { FC } from 'react'
import { IUser } from '../../../../../types/user'
import { Avatar } from '../../Avatar/Avatar'
import styled from "styled-components";

interface IProps {
  user: IUser;
}

export const DropboxAvatar: FC<IProps> = ({ user }) => {
  return (
    <Avatar width={65} height={65} >
      <UserName>
        {user.name}
      </UserName>

      <UserRole>
        {user.role}
      </UserRole>
    </Avatar>
  )
}

const UserName = styled.div`
  font-size: 1.3rem;
`
const UserRole = styled.div`
  margin-top: 5px;
  font-size: .875rem;
  color: #999;
`