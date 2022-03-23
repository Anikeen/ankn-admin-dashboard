import { FC, ReactNode } from "react"
import { HeaderRow, STable, ColumnHeader, Wrapper } from "./styled"

interface ITable {
  headers: Array<string>;
  children: ReactNode;
}

export const Table: FC<ITable> = ({ headers, children }) => {
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
