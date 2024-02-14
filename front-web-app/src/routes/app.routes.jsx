import { Route, Routes } from "react-router-dom";
import { User } from "../pages/User/User";
import { Home } from "../pages/Home/Home";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element= { < Home /> }/>
      <Route path="/user" element={ < User /> }/>
    </Routes>
  )
}

