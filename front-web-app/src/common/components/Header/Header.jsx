import { Container, UserAvatar } from "./styles";
import { InputSearch } from "../InputSearch/InputSearch";
import { useAuth } from "../../hooks/auth";
import { ProfileImage } from "../ProfileImage/ProfileImage";

export function   Header({ setSearch }) {
  const { user } = useAuth();

  function handleRedirectProfile() {
    window.open(import.meta.env.VITE_FRONT_URL + 'user');
  }

  return (
    <Container>
      <InputSearch setSearch={setSearch}/>
      <UserAvatar onClick={handleRedirectProfile}>
        <p>{user.name}</p>
        <ProfileImage   
          name={user.name}
          
          size={3.2}
          
        />
      </UserAvatar>
    </Container>
  );
}
