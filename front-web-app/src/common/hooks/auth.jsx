import { createContext, useContext, useCallback, useState } from "react";
import { api } from "../service/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@WebApp:token");
    const user = localStorage.getItem("@WebApp:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }
    
    return {};
  });
  
  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post("/", { email, password });
      
      const { token, userResponse } = response.data;
      
      localStorage.setItem("@WebApp:token", token);
      localStorage.setItem("@WebApp:user", JSON.stringify(userResponse));

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      
      setData({ token, user: userResponse });
    } catch (err) {
      alert("Não foi possível fazer login, tente novamente");

      //to do adicionar toastfy 
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@WebApp:token");
    localStorage.removeItem("@WebApp:user"); 
    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
