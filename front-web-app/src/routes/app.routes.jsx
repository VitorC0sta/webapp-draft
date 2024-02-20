import { Route, Routes } from "react-router-dom";
import { Users } from "../pages/Users/Users";
import { Home } from "../pages/Home/Home";
import { Profile } from "../pages/Profile/Profile";
import { SignIn} from "../pages/SignIn/SignIn";

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element= { < Home /> }/>
      <Route path="/users" element={ < Users /> }/>
      <Route path="/user" element={ < Profile /> }/>
      <Route path="/signin" element={ < SignIn /> }/>
    </Routes>
  )
}

