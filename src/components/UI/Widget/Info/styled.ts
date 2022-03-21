import styled from "styled-components";

interface IWrapper {
  gradientFrom: string;
  gradientTo: string;
}

export const Wrapper = styled.div<IWrapper>(({ gradientFrom, gradientTo }) => `
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 30px 15px;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
  background-image: linear-gradient(1turn, ${gradientFrom}, ${gradientTo});
`)

export const Count = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 2rem;
  line-height: 1;
`

export const Name = styled.div`
  font-size: 1.25rem;
  line-height: 1;
  opacity: .6;
`