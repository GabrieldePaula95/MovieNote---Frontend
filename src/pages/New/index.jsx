import { Link } from 'react-router-dom';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea";
import { ButtonText } from "../../components/ButtonText";
import { RiArrowLeftLine } from 'react-icons/ri';
import { Container, Form, Section } from "./styles";

export function New(){
    return(
        <Container>
            <Header />

            <main>
                <Link to="/">
                    <RiArrowLeftLine />
                    Voltar
                </Link>

                <Form>
                    <header>
                        <h1>Novo filme</h1>
                    </header>

                    <div>
                        <Input 
                            placeholder="Título"
                        />
                        <Input 
                            placeholder="Sua nota (de 0 a 5)"
                        />
                    </div>

                    <Textarea
                        placeholder="Observações" 
                    />

                    <h2>Marcadores</h2>

                    <Section>
                        <NoteItem 
                            value="Interestelar"
                        />                    
                           
                        <NoteItem 
                            value=""
                            $isNew
                            placeholder="Novo Marcador"
                        />  
                    </Section>   

                    <div>
                        <Button
                            $isBlack
                            title="Excluir filme"
                        />
                        <Button 
                            title="Salvar alterações"
                        />                      
                    </div>                              

                </Form>
            </main>
            
        </Container>
    );
}