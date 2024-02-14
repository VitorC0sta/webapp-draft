import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";
import { PropTypes } from "prop-types";


export function InputSearch({$searchFor}) {
  return(
    <Container>
      <FiSearch />
      <label htmlFor="search" className="sr-only">Pesquisar {$searchFor}</label>
      <input type="text" name="search" id="search" placeholder={"Pesquisar " + $searchFor}/>
    </Container>
  )
}

InputSearch.propTypes = {
  $searchFor: PropTypes.string
}