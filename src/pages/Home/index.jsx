import { useEffect, useState } from 'react'
import { RxPlus } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { Add, Container, Main, NewNote } from './styles'

import { Header } from '../../components/Header'
import { Note } from '../../components/Note'

export function Home() {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />
      <NewNote>
        <h1>Meus filmes</h1>
        <Add to="/new">
          <RxPlus />
          Adicionar filme
        </Add>
      </NewNote>
      <Main>
        {notes.map((note) => (
          <Note
            key={String(note.id)}
            data={note}
            onClick={() => handleDetails(note.id)}
          />
        ))}
      </Main>
    </Container>
  )
}
