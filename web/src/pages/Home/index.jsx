import { FiPlus } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import { Container, Content } from './styles'
import { MovieItem } from '../../components/MovieItem'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

export function Home() {
  const { search } = useAuth()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`)
      setMovies(response.data);
    }

    fetchMovies()
  }, [search])

  return (
    <Container>
      <Header />

      <Content>
        <div>
          <h2>Meus filmes</h2>

          <Link to="/new">
            <FiPlus />
            Adicionar filme
          </Link>
        </div>

        <main>
          <div>
            {movies && movies.map(movie => (
              <MovieItem
                key={String(movie.id)}
                movie={movie}
              />
            ))}
          </div>
        </main>
      </Content>
    </Container>
  )
}