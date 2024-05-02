import { Container, Main, Cards, Charts, Analytics } from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { Title } from "../../common/components/Title/Title";
import { Card } from "../../common/components/Card/Card";
import { FiUsers, FiMap, FiAlertTriangle } from "react-icons/fi";
import { MdBusAlert } from "react-icons/md";
import { BarChartStack } from "../../common/components/Charts/BarChartStack/BarChartStack";
import { LastEventsTable } from "../../common/components/LastEventsTable/LastEventsTable";
import { useEffect, useState } from "react";
import { api } from "../../common/service/api";


export function Home() {
  const [analyticsData, setAnalyticsData] = useState();
  const [lastEventsData, setLastEventsData] = useState([]);
  const [sevenDaysData, setSevenDaysData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const [eventResponse, analyticsResponse, sevenDaysResponse] =
        await Promise.all([
          api.get("/events/last_events"),
          api.get("/all_data"),
          api.get("/events/seven_days_events"),
        ]);

      const lastEvents = eventResponse.data?.map((event) => {
        const { eventName } = event;
        const { vehiclePlate } = event.Vehicle;

        return { eventName, vehiclePlate };
      });

      const analyticsDataInfo = analyticsResponse.data;
      const sevenDaysAnalyticsData = sevenDaysResponse.data;

      console.log(sevenDaysAnalyticsData);

      setSevenDaysData(sevenDaysAnalyticsData);
      setAnalyticsData(analyticsDataInfo);
      setLastEventsData(lastEvents);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <SideBar />
      <Main>
        <Title $text="Dashboard" className="title" />
        <Cards className="cards">
          <Card
            icon={MdBusAlert}
            $title={"Veículos"}
            $cardValue={analyticsData?.vehicles?.total || 0}
            className="vehicles"
          />
          <Card
            icon={FiAlertTriangle}
            $title={"Eventos"}
            $cardValue={analyticsData?.events?.total || 0}
            className="events"
          />
          <Card
            icon={FiMap}
            $title={"Operações"}
            $cardValue={analyticsData?.operations?.total || 0}
            className="operations"
          />
          <Card
            icon={FiUsers}
            $title={"Usuários"}
            $cardValue={analyticsData?.users?.total || 0}
            className="users"
          />
        </Cards>
        <Analytics>
          <Charts className="chart-container">
            <h3>Eventos últimos 7 dias</h3>
            <BarChartStack
              legends={["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]}
              data={sevenDaysData}
              isDataZoom
            />
          </Charts>
          <LastEventsTable data={lastEventsData} />
        </Analytics>
      </Main>
    </Container>
  );
}
