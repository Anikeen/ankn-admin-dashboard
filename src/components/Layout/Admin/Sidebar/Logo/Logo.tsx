import { Link } from "react-router-dom"
import styled from "styled-components";

export const Logo = () => {
  return (
    <Wrapper>
      <Link to="/">
        dashboard
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  font-size: 1.5rem;
  text-transform: uppercase;
  background-color: #f5f5f5;
  border-right: 1px solid #e5e5e5;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / .1)
`