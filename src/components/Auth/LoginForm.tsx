import { FormEvent, useContext, useState } from "react";
import { Form } from "../UI/Form/Form";
import { Input } from "../UI/Form/Input";
import { Title, Warning, Wrapper } from "./styled";
import useInput, { IUseInput } from "../../hooks/useInput";
import { AuthContext } from "../../context";

const inputInitialValue = '';

const loginValidation = {
  notEmpty: true,
  isEmail: true,
}

const passwordValidation = {
  notEmpty: true,
  minLength: 6
}

export const LoginForm = () => {
  const [isPending, setIsPending] = useState(false);
  const login: IUseInput = useInput(inputInitialValue, loginValidation);
  const password: IUseInput = useInput(inputInitialValue, passwordValidation);

  let loginValidationError: boolean = (login.isDirty && login.isEmpty) || (login.isDirty && login.emailError);
  let passwordValidationError: boolean = (password.isDirty && password.isEmpty) || (password.isDirty && password.minLengthError);

  const { signIn } = useContext(AuthContext);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (login.isEmpty) {
      login.setDirty(true);
      loginValidationError = true;
    }

    if (password.isEmpty) {
      password.setDirty(true);
      passwordValidationError = true;
    }

    if (loginValidationError || passwordValidationError) return;

    try {
      setIsPending(true);
      signIn(login.value, password.value, setIsPending);
    } catch (error) {
      alert('false')
    }

  }

  return (
    <Wrapper>
      <Title>Вход</Title>

      <Form onSubmit={onSubmit} isPending={isPending} btnWidth="100%" btnText="войти">
        <Input
          id="login"
          type="text"
          htmlFor="login"
          labelText="Email"
          value={login.value}
          onFocus={login.onFocus}
          onChange={login.onChange}
          onBlur={login.onBlur}
          isFocused={login.isFocused}
        >
          {(login.isDirty && login.isEmpty) && <Warning>Это поле обязательно</Warning>}
          {(login.isDirty && !login.isEmpty && login.emailError) && <Warning>Введите корректный email</Warning>}
        </Input>

        <Input
          id="password"
          type="password"
          htmlFor="password"
          labelText="Пароль"
          value={password.value}
          onFocus={password.onFocus}
          onChange={password.onChange}
          onBlur={password.onBlur}
          isFocused={password.isFocused}
        >
          {(password.isDirty && password.isEmpty) && <Warning>Это поле обязательно</Warning>}
          {(password.isDirty && !password.isEmpty && password.minLengthError) && <Warning>Не менее {password.minLength} символов</Warning>}
        </Input>
      </Form>
    </Wrapper>
  );
}
