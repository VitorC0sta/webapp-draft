import { Container, Menu, MenuItems } from "./styles";
import { FiBriefcase, FiUsers, FiMap, FiAlertOctagon } from "react-icons/fi";
import { MdBusAlert } from "react-icons/md";
import { PropTypes } from "prop-types";
export function SideBar() {
  return (
    <Container>
      <Menu>
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
          <a href="/user">
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