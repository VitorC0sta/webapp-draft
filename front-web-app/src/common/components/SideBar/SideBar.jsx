import { Container, Menu, MenuItems } from "./styles";
import { FiBriefcase, FiUsers, FiMap, FiAlertOctagon } from "react-icons/fi";
import { MdBusAlert } from "react-icons/md";
import { PropTypes } from "prop-types";
import Logo from "../../../assets/argus-svg/argus-logo-header.svg";

export function SideBar() {
  return (
    <Container>
      <Menu>
        <img src={Logo} alt="argus logo"/>
        <MenuItems>
          <a href="#">
            <MdBusAlert />
            Frotas
          </a>
        </MenuItems>
        <hr />
        <MenuItems>
          <a href="#">
            <FiBriefcase />
            Clientes
          </a>
        </MenuItems>
        <hr />
        <MenuItems>
          <a href="/users">
            <FiUsers />
            Usuários
          </a>
        </MenuItems>
        <hr />
        <MenuItems>
          <a href="#">
            <FiMap />
            Operações
          </a>
        </MenuItems>
        <hr />
        <MenuItems>
          <a href="#">
            <FiAlertOctagon />
            Eventos
          </a>
        </MenuItems>
      </Menu>
    </Container>
  );
}

SideBar.propTypes = {
  $isActive: PropTypes.bool
}