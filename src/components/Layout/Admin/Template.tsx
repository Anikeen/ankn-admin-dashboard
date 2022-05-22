import { FC } from "react"
import { Search } from "../../UI/Search/Search"
import { ProfileWidget } from "../../UI/Widget/Profile/ProfileWidget"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"
import styled from "styled-components";

export const Template: FC = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />

      <MainSection>
        <Header>
          <Search />
          <ProfileWidget />
        </Header>

        <Main>
          {children}
        </Main>
      </MainSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`
const MainSection = styled.div`
  flex-grow: 1;
`
const Main = styled.main`
  height: 100%;
  padding: 0 30px 30px;
  background-color: #e5e5e5;
  overflow-y: auto;
`