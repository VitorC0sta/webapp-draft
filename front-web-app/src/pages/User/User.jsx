import { Container, Main} from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { Header } from "../../common/components/Header/Header";
import { InputSearch } from "../../common/components/InputSearch/InputSearch";
import { CreationButton } from "../../common/components/CreationButton/CreationButton";

export function User() {
  return (
    <Container>
      <Header />
      <div className="body-container">
        <SideBar />
        <div className="hero">
          <div className="hero-head">
            <InputSearch
              $searchFor={"usuários"}
            />
            <CreationButton />
          </div>
          <Main>
          </Main>
        </div>
      </div>
    </Container>
  )
}