import { FiArrowLeft } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
// import { Header } from '../../components/Header'

import { Container, Content, Form } from './styles'
import { Textarea } from '../../components/Textarea'
import { TagItem } from '../../components/TagItem'
import { Button } from '../../components/Button'
import { useState } from 'react'
import { api } from '../../services/api'

export function NewMovie() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    if (!newTag) {
      return alert("Digite um texto para a tag.")
    }
    setTags(state => [...state, newTag])
    setNewTag("")
  }

  function handleRemoveTag(tagName) {
    const filteredTags = tags.filter(tag => tag !== tagName)
    setTags(filteredTags)
  }

  async function handleNewMovie() {
    if (!title && !rating) {
      return alert("Título e Nota são obrigatórios.")
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio")
    }

    try {
      await api.post("/movies", {
        title,
        rating,
        description,
        tags
      })

      alert("Filme criado com sucesso")
      handleBack()
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert("Falha ao criar filme.")
      }
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <button onClick={handleBack}>
          <FiArrowLeft />
          Voltar
        </button>

        <div>
          <Form>
            <h2>Novo filme</h2>

            <div>
              <Input
                placeholder="Título"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                placeholder="Sua nota (de 0 a 5)"
                type="number"
                min={1}
                max={5}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>

            <Textarea
              placeholder="Observações"
              onChange={(e) => setDescription(e.target.value)}
            />

            <section>
              <h3>Marcadores</h3>

              <div className='tags'>
                {tags && tags.map(tag => (
                  <TagItem
                    key={String(tag.id)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))}
                <TagItem
                  isNew
                  placeholder="Novo marcador"
                  value={newTag}
                  onChange={e => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                />
              </div>
            </section>

            <div>
              <Button title="Excluir filme" isDelete />
              <Button
                title="Salvar alterações"
                onClick={handleNewMovie}
              />
            </div>
          </Form>
        </div>
      </Content>
    </Container>
  )
}