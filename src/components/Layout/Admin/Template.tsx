import { FC } from "react"
import { Search } from "../../UI/Search/Search"
import { ProfileWidget } from "../../UI/Widget/Profile/ProfileWidget"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"
import { Main, MainSection, Wrapper } from "./styled"

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
