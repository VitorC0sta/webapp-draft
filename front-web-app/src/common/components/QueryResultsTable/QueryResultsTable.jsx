import { Container, Badge } from "./styles";


export function QueryResultsTable({ fields, data }) {
 
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
            {Object.keys(user).map((key) => {  
                if (key === "contact") {
                  return (
                    <td className=".contact" key={key}>
                      <p>{user[key].email}</p>
                      <span>{user[key].phoneNumber}</span>
                    </td>
                  );
                } else if (key === "active") {
                  
                  return user[key] ? (
                    <td key={key} >
                      <Badge $active>
                        <p>Ativo</p>
                      </Badge>
                    </td>
                  ) : (
                    <td key={key}>
                      <Badge>
                        <p>Inativo</p>
                      </Badge>
                    </td>
                  );
                } else if  (key === "administrator") {
                  return user[key] ? <td key={key}>administrador</td> : <td>padrão</td>
                }

                return (
                  <td key={key}>
                    <p>{user[key]}</p>
                  </td>
                );
              })
            }
          </tr>
        ))}
      </tbody>
    </Container>
  );
}
