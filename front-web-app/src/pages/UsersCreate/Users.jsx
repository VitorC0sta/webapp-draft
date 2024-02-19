import { Container, Form, Main } from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { Input } from "../../common/components/Input/Input";
import {Button} from "../../common/components/Button/Button";


export function UsersCreate() {
  return (
    <Container>
      <div className="container-body">
        <SideBar />
        <div className="hero">
          <Main>
            <Form>
              <Input $type="text" $id="name" $label="Nome"/>
              <Input $type="text" $id="email" $label="Email"/>
              <Input $type="text" $id="national_number" $label="ID Nacional. ex: CPF"/>
              <Input $type="password" $id="password" $label="Senha"/>
              <Input $type="number" $id="client_id" $label="Id da empresa"/>
              <Button $type="submit" text="Criar"/>
            </Form>
          </Main>
        </div>
      </div>
    </Container>
  );
}
