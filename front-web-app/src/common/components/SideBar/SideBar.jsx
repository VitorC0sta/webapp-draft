import { Container, Menu, Items } from "./styles";
import { UserMenu } from "../UserMenu/UserMenu";
import { FiBriefcase, FiUsers, FiMap, FiAlertOctagon } from "react-icons/fi";
import { MdBusAlert } from "react-icons/md";
import { PropTypes } from "prop-types";
import Logo from "../../../assets/argus-svg/argus-logo-header.svg";

export function SideBar() {
  return (
    <Container>
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="argus logo" />
        </a>
      </div>

      <Menu>
        <Items>
          <a href="#">
            <MdBusAlert />
            Frotas
          </a>
        </Items>
        <hr />
        <Items>
          <a href="#">
            <FiBriefcase />
            Clientes
          </a>
        </Items>
        <hr />
        <Items>
          <a href="/users">
            <FiUsers />
            Usuários
          </a>
        </Items>
        <hr />
        <Items>
          <a href="#">
            <FiMap />
            Operações
          </a>
        </Items>
        <hr />
        <Items>
          <a href="#">
            <FiAlertOctagon />
            Eventos
          </a>
        </Items>
      </Menu>
      <UserMenu />
    </Container>
  );
}

SideBar.propTypes = {
  $isActive: PropTypes.bool,
};
