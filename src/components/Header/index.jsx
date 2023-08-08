import { Container, Profile, Search, Logo } from "./styles";
import { Input } from "../Input";

export function Header(){
    return(
        <Container>

            <Logo>
                <strong>MoviesNotes</strong>
            </Logo>

            <Search placeholder="Pesquisar pelo título" />  

            <Profile to="/profile">
                <div>
                    <strong>Gabriel de Paula</strong>
                    <button>Sair</button>
                </div>

                <img 
                src="https://github.com/gabrieldepaula95.png"
                alt="Foto do usuário" />                
            </Profile>
        </Container>
    );
}