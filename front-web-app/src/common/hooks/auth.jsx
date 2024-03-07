import { createContext, useContext, useCallback, useState } from "react";
import { api } from "../service/api";

const AuthContext = createContext({});

function AuthProvider({children}) {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@WebApp:token")
    const user = localStorage.getItem("@WebApp:user")

    if(token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user)}
    }

    return {}
  });

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post("/", {email, password});
      
      const { token, userResponse } = response.data;

      localStorage.setItem("@WebApp:token", token); 
      localStorage.setItem("@WebApp:user", JSON.stringify(userResponse)); 

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user: userResponse });
    } catch (err){
      if(err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível fazer login");
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
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