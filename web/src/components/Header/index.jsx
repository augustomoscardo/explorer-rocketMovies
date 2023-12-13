import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../Input'
import placeHolderImg from '../../assets/userPlaceHolder.png'
import { api } from '../../services/api'

import { Container, Profile } from './styles'
import { useAuth } from '../../hooks/auth'

export function Header() {
  const { signOut, user, changeSearchText } = useAuth()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeHolderImg

  const navigate = useNavigate()

  function handleSearch(e) {
    changeSearchText(e.target.value)
  }

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  return (
    <Container>
      <h2>RocketMovies</h2>

      <Input
        type="text"
        placeholder="Pesquisar pelo título"
        onChange={(e) => handleSearch(e)}
      />

      <Profile>
        <div>
          <Link to="/profile">
            <strong>Augusto Moscardo</strong>
          </Link>
          <button onClick={handleSignOut}>sair</button>
        </div>

        <img src={avatarURL} alt={`Imagem de ${user.name}`} />
      </Profile>
    </Container>
  )
}