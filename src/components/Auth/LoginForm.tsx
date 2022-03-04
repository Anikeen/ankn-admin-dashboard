import { FormEvent, useContext } from "react";
import { Form } from "../UI/Form/Form";
import { Input } from "../UI/Form/Input";
import { Title, Warning, Wrapper } from "./styled";
import UseInput, { IUseInput } from "../../hooks/useInput";
import { AuthContext } from "../../context";

export const LoginForm = () => {

  const login: IUseInput = UseInput('', { isEmpty: true, isEmail: true, minLength: 0 });
  const password: IUseInput = UseInput('', { isEmpty: true, minLength: 6 });

  let loginError: boolean = (login.isDirty && login.isEmpty) || (login.isDirty && login.emailError);
  let passwordError: boolean = (password.isDirty && password.isEmpty) || (password.isDirty && password.minLengthError);

  const { signIn } = useContext(AuthContext);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (login.isEmpty) {
      login.setDirty(true);
      loginError = true;
    }

    if (password.isEmpty) {
      password.setDirty(true);
      passwordError = true;
    }

    if (loginError || passwordError) return;

    signIn(login.value, password.value);
  }

  return (
    <Wrapper>
      <Title>Вход</Title>

      <Form onSubmit={onSubmit} btnText="войти">
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
