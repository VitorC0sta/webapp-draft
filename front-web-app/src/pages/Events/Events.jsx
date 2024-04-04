import { Container, Main } from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { InputSearch } from "../../common/components/InputSearch/InputSearch";
import { QueryResultsTable } from "../../common/components/QueryResultsTable/QueryResultsTable";
import { useEffect, useState } from "react";
import { api } from "../../common/service/api";

export function Events() {
 const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(import.meta.env.VITE_API_URL + "");
      
      setData(response.data);
      
      return
    }

    fetchData();
  }, [])

  return (
    <Container>
      <SideBar />
      <div className="body-container">
        <div className="head-container">
          <InputSearch $searchFor={"eventos"} />
        </div>
        <Main>
          <QueryResultsTable
            fields={[
              "#",
              "Evento",
              "Horário",
              "Placa",
              "",
            ]}
            data={data}
          />
        </Main>
      </div>
    </Container>
  );
}
