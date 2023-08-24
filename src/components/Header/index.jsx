import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Container, Profile, Search, Logo } from "./styles";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header({ onChange }){
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    function handleSignOut(){
        navigate("/");
        signOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container>

            <Logo>
                <strong>MoviesNotes</strong>
            </Logo>

            <Search 
                placeholder="Pesquisar pelo título" 
                onChange={onChange}
            />  
            <div>
                <Profile to="/profile">                
                    <div>
                        <strong >{user.name}</strong>

                    </div>
                    <img 
                        src={avatarUrl}
                        alt={`Foto do ${user.name}`}
                    />               
                </Profile>
                <button onClick={handleSignOut} >Sair</button>
            </div>
        </Container>
    );
}
