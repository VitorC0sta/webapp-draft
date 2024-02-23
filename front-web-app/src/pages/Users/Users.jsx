import { Container, Main } from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { InputSearch } from "../../common/components/InputSearch/InputSearch";
import { CreationButton } from "../../common/components/CreationButton/CreationButton";
import { QueryResultsTable } from "../../common/components/QueryResultsTable/QueryResultsTable";

export function Users() {
  return (
    <Container>
      <SideBar />
      <div className="body-container">
        <div className="head-container">
          <InputSearch $searchFor={"usuários"} />
          <CreationButton />
        </div>
        <Main>
          <QueryResultsTable />
        </Main>
      </div>
    </Container>
  );
}
