import { Container } from "./styles";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { PropTypes } from "prop-types";
import Logo from "../../../assets/argus-svg/argus-logo-header.svg";

export function Header({ $userName = "Vitor Costa", description }) {
  return (
    <Container>
      <a href="/"><img src={Logo} alt="Argus Logo" /></a>
      <div className="dropdown">
        <button className="drop-img">
          <img src="https://github.com/VitorC0sta.png" alt={description} />
        </button>
        <div className="dropdown-content">
          <p>{$userName}</p>
          <a href="">
            Configurações
            <FiSettings />
          </a>
          <a href="" id="logout">
            Sair da conta
            <FiLogOut />
          </a>
        </div>
      </div>
    </Container>
  );
}

Header.propTypes = {
  $userName: PropTypes.string,
  description: PropTypes.string,
};
