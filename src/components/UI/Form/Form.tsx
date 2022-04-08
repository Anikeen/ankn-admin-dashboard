import { FC, FormEvent, ReactNode } from 'react';
import { Spinner } from '../Spinner/Spinner';
import { Button } from './styled';

interface FormProps {
  onSubmit: (e: FormEvent) => void;
  isPending: boolean;
  btnText: string;
  btnWidth: string;
  children?: ReactNode;
  refer?: any;
}

export const Form: FC<FormProps> = ({ onSubmit, isPending, btnWidth, btnText, children, refer }) => {
  return (
    <form onSubmit={onSubmit} ref={refer}>
      {children}
      <Button type="submit" width={btnWidth}>
        {btnText}
        {isPending && <Spinner background='#fff' opacity={0.8} ellipseColor='#4272d7' />}
      </Button>
    </form>
  );
}
