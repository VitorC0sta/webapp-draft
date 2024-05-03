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
import { useAuth } from "../../common/hooks/auth";
import { Modal } from "../../common/components/Modal/Modal";
import { Input } from "../../common/components/Input/Input";
import { Button } from "../../common/components/Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Home() {
  const [analyticsData, setAnalyticsData] = useState();
  const [lastEventsData, setLastEventsData] = useState([]);
  const [sevenDaysData, setSevenDaysData] = useState([]);
  const [open, setOpen] = useState(true);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { user } = useAuth();

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

  async function handleFirstPassword(event) {
    event.preventDefault();

    try {
      await api.put("user/update", {
        password,
        newPassword,
        confirmNewPassword,
        firstAccess: false,
      });
      setOpen(false);
    } catch {
      toast("Não foi possível alterar a senha.");
    }
  }

  return (
    <Container>
      {user.firstAccess && (
        <Modal
          isOpen={open}
          title={"Alterar senha de primeiro acesso"}
          className="modal"
          exists
          noClose
        >
          <ToastContainer />
          <form>
            <div className="wrap-passwords">
              <Input
                label="Código de acesso"
                id="password"
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                label="Nova senha"
                id="new-password"
                type="password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <Input
                label="Confirme a nova senha"
                id="password"
                type="password"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </div>
            <Button
              type="button"
              title={"Mudar"}
              onClick={handleFirstPassword}
              $typeSubmit
            />
          </form>
        </Modal>
      )}
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
