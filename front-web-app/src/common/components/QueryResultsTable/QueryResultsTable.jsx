import { Container } from "./styles";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

export function QueryResultsTable({ fields, data }) {
  console.log()

  return (
    <Container>
      <thead>  
        <tr>
          {fields.map((field) => {
            return <th key={field}> {field} </th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data?.map((user, index) => (
          <tr key={index}>
            {Object.keys(user).map((key) =>
              key == "contact" ? (
                <td className=".contact" key={key}>
                  <p>{user[key].email}</p>
                  <span>{user[key].phoneNumber}</span>
                </td>
              ) : (
                <td key={key}>
                  <p>{user[key]}</p>
                </td>
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
