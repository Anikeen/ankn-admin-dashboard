import { FC, FormEvent, ReactNode } from 'react';
import { Spinner } from '../Spinner/Spinner';
import { Button } from './styled';

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
