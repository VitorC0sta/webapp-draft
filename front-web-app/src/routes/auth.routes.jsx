import { Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/SignIn/SignIn";
import { ResetPassword } from "../pages/ResetPassword/ResetPasword";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/reset_password" element={<ResetPassword />}/>
    </Routes>
  );
}