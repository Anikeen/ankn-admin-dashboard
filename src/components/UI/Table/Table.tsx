import { FC, ReactNode } from "react"
import { HeaderRow, STable, ColumnHeader, Wrapper } from "./styled"

interface IProps {
  headers: Array<string>;
  children: ReactNode;
}

export const Table: FC<IProps> = ({ headers, children }) => {
  return (
    <Wrapper>
      <STable>
        <thead>
          <HeaderRow>
            {headers.map((header, i) => <ColumnHeader key={i}>{header}</ColumnHeader>)}
          </HeaderRow>
        </thead>

        <tbody>
          {children}
        </tbody>
      </STable>
    </Wrapper>
  )
}
