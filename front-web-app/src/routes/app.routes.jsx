import { Route, Routes } from "react-router-dom";
import { Users } from "../pages/Users/Users";
import { Home } from "../pages/Home/Home";
import { Profile } from "../pages/Profile/Profile";
import { Clients } from "../pages/Clients/Clients";
import { Operations } from "../pages/Operations/Operations";
import { Events } from "../pages/Events/Events";
import { Fleets } from "../pages/Fleets/Fleets";
import { useAuth } from "../common/hooks/auth";

export function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {user.administrator && (
        <>
          <Route path="/users" element={<Users />} />
          <Route path="/clients" element={<Clients />} />
        </>
      )}
      <Route path="/user" element={<Profile />} />
      <Route path="/events" element={<Events />} />
      <Route path="/operations" element={<Operations />} />
      <Route path="/fleets" element={<Fleets />} />
    </Routes>
  );
}
