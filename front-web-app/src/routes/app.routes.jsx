import { Route, Routes } from "react-router-dom";
import { User } from "../pages/User/User";
import { Home } from "../pages/Home/Home";
import { Perfil } from "../pages/Perfil/Perfil";
import { SignIn} from "../pages/SignIn/SignIn";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element= { < Home /> }/>
      <Route path="/users" element={ < User /> }/>
      <Route path="/user" element={ < Perfil /> }/>
      <Route path="/signin" element={ < SignIn /> }/>
    </Routes>
  )
}

