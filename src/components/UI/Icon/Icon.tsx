import { FC } from 'react'
import { StyledIcon } from './styled'

interface IProps {
  className: string;
  size: number;
}

export const Icon: FC<IProps> = ({ className, size }) => {
  return (
    <StyledIcon className={className} size={size} />
  )
}
