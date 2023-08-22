import { useNavigate, useParams } from 'react-router-dom';
import { RiArrowLeftLine } from 'react-icons/ri'
import { useEffect, useState } from 'react';
import { LuClock3 } from 'react-icons/lu';
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { Container, Main, Name, Description, Section } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Header } from "../../components/Header";
import { Tags } from "../../components/Tags";
import { Button } from "../../components/Button";


export function Details(){
  const [data, setData] = useState(null);

  const { user } = useAuth();

  const avatar = `${api.defaults.baseURL}/files/${user.avatar}`

  const params = useParams();
  const navigate = useNavigate();

  function handleReturn(){
      navigate("/")
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data)
    }

    fetchNote();
  }, []);

  return(
    <Container>
      <Header />
      {
        data &&
        <Main>
          <ButtonText 
            icon={RiArrowLeftLine}
            title="Voltar" 
            onClick={handleReturn}
          />

          <Name>
            <h1>
              {data.title}
            </h1>

            <Rating rating={data.rating} />

          </Name>
          
          <Section>
            <img 
              src={avatar} 
              alt={`foto do ${user.name}`}
            />
            <p>{`Por ${user.name}`}</p>
            <LuClock3 />
            <p>{(data.created_at)}</p>
          </Section>
          {
            data.tags &&
            <Section>
              {
                data.tags.map(tag => (
                  <Tags 
                    key={String(tag.id)}
                    title={tag.name}
                  />
                ))
              }
            </Section>
          }


          <Description>
            {data.description}                        
          </Description> 

          <Button
            $isBlack
            title="Excluir filme"
            onClick={handleRemove}
          />
        </Main>
      }
    </Container>
  )
}