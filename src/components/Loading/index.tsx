import { Container, LoadIndicator } from './styles'

export function Loading(){
  return (
    <Container testID='loading'>
      <LoadIndicator />
    </Container>
  )
}