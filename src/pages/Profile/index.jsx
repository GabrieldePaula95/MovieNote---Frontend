import { useState } from 'react'
import { FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { RiArrowLeftLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { Avatar, Container, Form } from './styles'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  async function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <Link to={-1}>
          <RiArrowLeftLine />
          Voltar
        </Link>
      </header>

      <Avatar>
        <img src={avatar} alt={`foto do ${user.name}`} />

        <label htmlFor="avatar">
          <FiCamera />

          <input id="avatar" type="file" onChange={handleChangeAvatar} />
        </label>
      </Avatar>

      <Form>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setPasswordOld(e.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
