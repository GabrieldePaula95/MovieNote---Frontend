import { format, subHours } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { useEffect, useState } from 'react'
import { LuClock3 } from 'react-icons/lu'
import { RiArrowLeftLine } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Rating } from '../../components/Rating'
import { Tags } from '../../components/Tags'
import { Container, Description, Main, Name, Section } from './styles'

export function Details() {
  const [data, setData] = useState(null)

  const { user } = useAuth()

  const params = useParams()
  const navigate = useNavigate()

  const avatar = `${api.defaults.baseURL}/files/${user.avatar}`

  function handleReturn() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm('Deseja realmente remover a nota?')

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate('/')
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote()
  }, [params.id])

  return (
    <Container>
      <Header />
      {data && (
        <Main>
          <ButtonText
            icon={RiArrowLeftLine}
            title="Voltar"
            onClick={handleReturn}
          />

          <Name>
            <h1>{data.title}</h1>

            <Rating rating={data.rating} />
          </Name>

          <Section>
            <img src={avatar} alt={`foto do ${user.name}`} />
            <p>{`Por ${user.name}`}</p>
            <LuClock3 />
            <p>
              {format(
                subHours(
                  utcToZonedTime(new Date(data.created_at), 'Etc/UTC'),
                  6,
                ),
                `dd/MM/yy 'às' HH:mm`,
              )}
            </p>
          </Section>
          {data.tags && (
            <Section>
              {data.tags.map((tag) => (
                <Tags key={String(tag.id)} title={tag.name} />
              ))}
            </Section>
          )}

          <Description>{data.description}</Description>

          <Button $isBlack title="Excluir filme" onClick={handleRemove} />
        </Main>
      )}
    </Container>
  )
}
