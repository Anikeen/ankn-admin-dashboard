import { FC } from "react"
import { Image, User, Userpic, Wrapper } from "./styled"

interface IAvatar {
  width: number;
  height: number;
}

export const Avatar: FC<IAvatar> = ({ width, height, children }) => {
  return (
    <Wrapper>
      <Image width={width} height={height}>
        <Userpic />
      </Image>
      <User>{children}</User>
    </Wrapper>
  )
}
