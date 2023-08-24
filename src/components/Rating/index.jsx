import { RiStarLine, RiStarSFill } from 'react-icons/ri'
import { Container } from './styles'

export function Rating({ rating }) {
  const ratingStars = [
    <RiStarLine key={1} />,
    <RiStarLine key={2} />,
    <RiStarLine key={3} />,
    <RiStarLine key={4} />,
    <RiStarLine key={5} />,
  ]

  for (let i = 0; i < rating; i++) {
    ratingStars[i] = <RiStarSFill />
  }

  return <Container>{...ratingStars}</Container>
}
