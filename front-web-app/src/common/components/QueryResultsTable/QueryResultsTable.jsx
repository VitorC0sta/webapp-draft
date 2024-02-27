import { Container } from "./styles";
import userData from "./userExample";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { PropTypes } from "prop-types";

export function QueryResultsTable({ fields }) {
  return (
    <Container>
      <thead>
        <tr>
          {
            fields.map(field => {
              return (
                <th key={field}> { field } </th>
              )
            })
          }
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
              <Link to="/users" className="query-profile">
                <FiUser />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}

QueryResultsTable.propTypes = {
  fields: PropTypes.array
}