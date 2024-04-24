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
        {data?.map((field, index) => (
          <tr key={index}>
            {Object.keys(field).map((key) => {  
                if (key === "contact") {
                  return (
                    <td className=".contact" key={key}>
                      <p>{field[key].email}</p>
                      <span>{field[key].phoneNumber}</span>
                    </td>
                  );
                } else if (key === "active") {
                  
                  return field[key] ? (
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
                  return field[key] ? <td key={key}>administrador</td> : <td>padrão</td>
                } else if (key === "destination") {
                  return (
                    <td className=".destination" key={key}>
                      <p>{field[key].destinationCity}</p>
                      <span>{field[key].destinationRegion}</span>
                    </td>
                  );
                }

                return (
                  <td key={key}>
                    <p>{field[key]}</p>
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
