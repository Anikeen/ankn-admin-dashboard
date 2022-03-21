import { FC } from 'react'
import { StyledIcon } from './styled'

interface IIcon {
  className: string;
  size: number;
}

export const Icon: FC<IIcon> = ({ className, size }) => {
  return (
    <StyledIcon className={className} size={size} />
  )
}
