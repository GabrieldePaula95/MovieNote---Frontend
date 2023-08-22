import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { Container, Profile, Search, Logo } from "./styles";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header({ onChange }){
    const { signOut, user } = useAuth();

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
                <button onClick={signOut} >Sair</button>
            </div>
        </Container>
    );
}
