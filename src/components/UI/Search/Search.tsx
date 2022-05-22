import { Icon } from "../Icon/Icon/Icon"
import styled from "styled-components";

export const Search = () => {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Input placeholder="Поиск..." />
      <Button type="submit">
        <Icon className="icon-search" size={1.2} color='' />
      </Button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  justify-content: start;
  height: 35px;
`
const Input = styled.input`
  width: 350px;
  padding: 0 15px;
  border: 1px solid #e5e5e5;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  &::placeholder {
    color: #999;
    transition: padding .4s, opacity .4s;
  }
  &:focus::placeholder {
    padding-left: 20px;
    opacity: 0;
  }
`
const Button = styled.button`
  width: 65px;
  line-height: 100%;
  color: #fff;
  background-color: #4272d7;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  transition: background-color .4s;
  &:hover {
    background-color: #3868cd;
  }
`