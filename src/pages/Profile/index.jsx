import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { RiArrowLeftLine } from 'react-icons/ri'
import { Container, Form, Avatar } from "./styles";
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <RiArrowLeftLine />
                    Voltar
                </Link>
            </header>

            <Avatar>
                <img 
                    src="https:\\github.com/gabrieldepaula95.png" 
                    alt="foto do usuário" 
                />

                <label htmlFor="avatar">
                    <FiCamera />
                    
                    <input 
                        id="avatar"
                        type="file" 
                    />

                </label>

            </Avatar>

            <Form>
                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                <Input 
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input 
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar" />
                
            </Form>
        </Container>
    );
}