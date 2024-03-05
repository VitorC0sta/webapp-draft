import { createContext } from "react";

const AuthContext = createContext({
  
});

function AuthProvider({children}) {
  return (
    <AuthContext.Provider value={ {name: "Vitor", email: "vitor@email.com"} }>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthProvider };