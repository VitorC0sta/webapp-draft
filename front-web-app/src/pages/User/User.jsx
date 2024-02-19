import { Container, Main} from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { InputSearch } from "../../common/components/InputSearch/InputSearch";
import { CreationButton } from "../../common/components/CreationButton/CreationButton";

export function User() {
  return (
    <Container>
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