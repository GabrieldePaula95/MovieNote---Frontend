import { Link } from "react-router-dom"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button"
import { RiArrowLeftLine } from 'react-icons/ri'
import { FiUser, FiMail, FiLock  } from "react-icons/fi"

import { Container, Form, Background } from "./styles";

export function SignUp(){
    return (
        <Container>
            <Form>
                <h1>MoviesNotes</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

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
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Cadastrar"/>

                <Link to="/">
                    <RiArrowLeftLine />
                    Voltar para login
                </Link>
            </Form>

            <Background />
        </Container>
    );
}