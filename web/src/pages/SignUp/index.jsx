import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Background, Container, Form } from './styles'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso")
        navigate("/")
      })
      .catch(err => {
        if (err.response) {
          console.log(err);
          alert(err.response.data.message)
        } else {
          alert("Não foi possível cadastrar")
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input
          icon={FiUser}
          type="name"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          icon={FiMail}
          type="e-mail"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock}
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          title="Entrar"
          onClick={handleSignUp}
        />

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>

      <Background />
    </Container>
  )
}