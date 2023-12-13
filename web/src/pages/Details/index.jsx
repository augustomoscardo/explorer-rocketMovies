import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FiArrowLeft, FiStar, FiClock } from 'react-icons/fi'
import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { api } from '../../services/api.js'
import placeHolderImg from '../../assets/userPlaceHolder.png'

import { Header } from '../../components/Header'

import { Container, Content, ContentHeader, Rating, ContentBody, ContentInfo, Tags } from './styles.js'

export function Details() {
  const [movie, setMovie] = useState(null)

  const params = useParams()
  const navigate = useNavigate()


  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`)
      setMovie(response.data)
    }

    fetchMovie()
  }, [])

  const createdAtFormatted = movie && format(new Date(movie.created_at), "dd/MM/yyyy 'às' HH:mm", {
    locale: ptBr
  })

  const authorImgURL = movie ? `${api.defaults.baseURL}/files/${movie.author.avatar}` : placeHolderImg

  return (
    <Container>
      <Header />

      {movie && (
        <Content>
          <button onClick={handleBack}>
            <FiArrowLeft />
            Voltar
          </button>

          <main>
            <div>
              <ContentHeader>
                <h2>{movie.title}</h2>
                <Rating>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar
                      key={i}
                      style={i + 1 <= movie.rating ? { fill: '#FF859B' } : ''}
                    />
                  ))}
                </Rating>
              </ContentHeader>

              <ContentBody>
                <ContentInfo>
                  <div className="user">
                    <img src={authorImgURL} alt="Augusto Moscardo" />
                    <p>Por {movie.author.name}</p>
                  </div>

                  <div className="date">
                    <FiClock />
                    <p>{createdAtFormatted}</p>
                  </div>
                </ContentInfo>

                <Tags>
                  {movie.tags && movie.tags.map(tag => (
                    <span key={String(tag.id)}>{tag.name}</span>
                  ))}
                </Tags>

                <p>{movie.description}</p>
              </ContentBody>
            </div>
          </main>
        </Content>
      )}
    </Container>
  )
}