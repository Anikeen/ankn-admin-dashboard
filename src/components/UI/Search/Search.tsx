import { Icon } from "../Icon/Icon"
import { Button, Input, Form } from "./styled"

export const Search = () => {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Input placeholder="Поиск..." />
      <Button type="submit">
        <Icon className="icon-search" size={1.2} />
      </Button>
    </Form>
  )
}
