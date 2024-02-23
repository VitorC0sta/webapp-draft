import { Container } from "./styles";
import userData from "./userExample";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

export function QueryResultsTable() {
  return (
    <Container>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Contato</th>
          <th>Empresa</th>
          <th>Criação</th>
          <th>Status</th>
          <th>Administrador</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user, index) => (
          <tr key={index}>
            {Object.keys(user).map((key) =>
              key == "contact" ? (
                <td className=".contact" key={key}>
                  <p>{user[key].email}</p>
                  <span>{user[key].phoneNumber}</span>
                </td>
              ) : (
                <td key={key}><p>{user[key]}</p></td>
              )
            )}
            <td>
              <Link to="/users">
                <FiUser />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}
