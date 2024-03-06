import { Route, Routes } from "react-router-dom";
import { Users } from "../pages/Users/Users";
import { Home } from "../pages/Home/Home";
import { Profile } from "../pages/Profile/Profile";
import { SignIn } from "../pages/SignIn/SignIn";
import { Clients } from "../pages/Clients/Clients"; 
import { Operations } from "../pages/Operations/Operations";
import { Events } from "../pages/Events/Events";
import { Fleets } from "../pages/Fleets/Fleets";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/dashboard" element= { < Home /> }/>
      <Route path="/users" element={ < Users /> }/>
      <Route path="/user" element={ < Profile /> }/>
      <Route path="/" element={ < SignIn /> }/>
      <Route path="/clients" element={ < Clients /> }/>
      <Route path="/events" element={ < Events /> }/>
      <Route path="/operations" element={ < Operations />}/>
      <Route path="/fleets" element={ < Fleets />}/> 
    </Routes>
  )
}

