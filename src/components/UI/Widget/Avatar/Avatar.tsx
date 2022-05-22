import { FC } from "react"
import { Image, UserInfo, Userpic, Wrapper } from "./styles";

interface IProps {
  width: number;
  height: number;
}

export const Avatar: FC<IProps> = ({ width, height, children }) => {
  return (
    <Wrapper>
      <Userpic width={width} height={height}>
        <Image />
      </Userpic>

      <UserInfo>
        {children}
      </UserInfo>
    </Wrapper>
  )
}