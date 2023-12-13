import { Container } from './styles'

export function Button({ title, icon: Icon, loading = false, isDelete = false, ...rest }) {
  return (
    <Container
      {...rest}
      disabled={loading}
      $isDelete={isDelete}
      type='button'
    >
      {Icon && <Icon />}
      {loading ? 'Carregando...' : title}
    </Container>
  )
}