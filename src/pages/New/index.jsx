import { useState } from 'react'
import { RiArrowLeftLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { api } from '../../services/api'
import { Container, Form, Section } from './styles'

export function New() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddTags() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Digite o titulo da nota')
    }
    if (!rating) {
      return alert('Digite o valor da nota')
    }
    if (newTag) {
      return alert(
        'Você deixou uma tag no campo para adicionar, porém não clicou em adicionar. Clique em adicionar ou deixe o campo vazio.',
      )
    }

    if (rating < 0 || rating > 5) {
      return alert('Nota do filme tem que ser valor de 0 a 5!')
    }

    await api.post('/notes', {
      title,
      rating,
      description,
      tags,
    })

    alert('Nota criada com sucesso')
    navigate(-1)
  }

  function handleDeleteNew() {
    navigate(-1)
  }

  return (
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
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          {/* <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          /> */}

          <h2>Marcadores</h2>

          <Section>
            {/* {tags.map((tag, index) => (
              <NoteItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))} */}

            {/* <NoteItem
              $isNew
              placeholder="Novo Marcador"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onClick={handleAddTags}
            /> */}
          </Section>

          <div>
            <Button $isBlack title="Excluir filme" onClick={handleDeleteNew} />
            <Button title="Salvar alterações" onClick={handleNewNote} />
          </div>
        </Form>
      </main>
    </Container>
  )
}
