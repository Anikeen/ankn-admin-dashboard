import { FC, FormEvent, ReactNode } from 'react';
import styled from "styled-components";
import { Spinner } from '../Spinner/Spinner';

interface IProps {
  onSubmit: (e: FormEvent) => void;
  isPending: boolean;
  btnText: string;
  btnWidth: string;
  children?: ReactNode;
  refer?: any;
}

export const Form: FC<IProps> = ({ onSubmit, isPending, btnWidth, btnText, children, refer }) => {
  return (
    <form onSubmit={onSubmit} ref={refer}>
      {children}
      <Button type="submit" width={btnWidth}>
        {btnText}
        {isPending && <Spinner background='#fff' opacity={0.8} color='#4272d7' />}
      </Button>
    </form>
  );
}

const Button = styled.button<{ width: string }>(
  ({ width }) => `
    position: relative;
    width: ${width};
    padding: 0 35px;
    margin-top: 20px;
    line-height: 40px;
    text-transform: uppercase;
    color: #fff;
    background-color: #4272d7;
    border-radius: 3px;
    transition: background-color .3s ease;
    &:hover {
      background-color: #2f58ae;
    }    
  `
)