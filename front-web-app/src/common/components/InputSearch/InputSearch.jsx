import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";


export function InputSearch() {
  return(
    <Container>
      <FiSearch />
      <label htmlFor="search" className="sr-only">Pesquisar</label>
      <input type="text" name="search" id="search" placeholder="Pesquisar"/>
    </Container>
  )
}
