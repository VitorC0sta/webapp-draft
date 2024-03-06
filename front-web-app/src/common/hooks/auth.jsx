import { createContext, useContext } from "react";
import { api } from "../service/api";

const AuthContext = createContext({});

function AuthProvider({children}) {
  async function signIn( { email, password }) {
    console.log("passei aqui");
    try {
      const response = await api.post("/session", {email, password});
      console.log(response);

    } catch (err){
      if(err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível fazer login");
      }
    }
  }


  return (
    <AuthContext.Provider value={ signIn }>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };