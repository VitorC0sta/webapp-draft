import { Link, useLocation } from "react-router-dom";
import { Container, Menu, Items } from "./styles";
import { UserMenu } from "../UserMenu/UserMenu";
import { FiBriefcase, FiUsers, FiMap, FiAlertOctagon } from "react-icons/fi";
import { LiaChartBarSolid } from "react-icons/lia";
import { MdBusAlert } from "react-icons/md";
import { PropTypes } from "prop-types";
import Logo from "../../../assets/argus-svg/argus-logo-header.svg";


export function SideBar() {
  const location = useLocation();

  const isActive = (path) => location.pathname == path; 

  return (
    <Container>
      <div className="logo">
        <Link to="/dashboard">
          <img src={Logo} alt="argus logo" />
        </Link>
      </div>

      <Menu>
        <Items className={isActive('/dashboard') ? 'active': ''}>
          <Link to="/">
            <LiaChartBarSolid />
            Dashboard
          </Link>
        </Items>
        <Items className={isActive('/fleets') ? 'active': ''}>
          <Link to="/fleets">
            <MdBusAlert />
            Frotas
          </Link>
        </Items>
        <Items className={isActive('/clients') ? 'active': ''}>
          <Link to="/clients">
            <FiBriefcase />
            Clientes
          </Link>
        </Items>
        <Items className={isActive('/users')? 'active': ''}>
          <Link to="/users">
            <FiUsers />
            Usuários
          </Link>
        </Items>
        <Items className={isActive('/operations') ? 'active': ''}>
          <Link to="/operations">
            <FiMap />
            Operações
          </Link>
        </Items>
        <Items className={isActive('/events') ? 'active': ''}>
          <Link to="/events">
            <FiAlertOctagon />
            Eventos
          </Link>
        </Items>
      </Menu>
      <UserMenu />
    </Container>
  );
}

SideBar.propTypes = {
  $isActive: PropTypes.bool,
};
