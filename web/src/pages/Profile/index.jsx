import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import placeHolderImg from '../../assets/userPlaceHolder.png'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from './styles'
import { useState } from 'react'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState("")
  const [passwordNew, setPasswordNew] = useState("")

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeHolderImg
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()


  function handleBack() {
    navigate(-1)
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0]
    setAvatarFile(file)
    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  async function handleUpdate() {
    const updatedData = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew
    }

    const userUpdated = Object.assign(user, updatedData)

    updateProfile({ user: userUpdated, avatarFile })
  }

  return (
    <Container>
      <header>
        <button onClick={handleBack}>
          <FiArrowLeft />
          Voltar
        </button>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuáirio" />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <div className='user'>
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
        </div>

        <div className='password'>
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
        </div>

        <Button
          title="Salvar"
          onClick={handleUpdate}
        />

      </Form>
    </Container>
  )
}