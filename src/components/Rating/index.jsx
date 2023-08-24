import { RiStarLine, RiStarSFill } from 'react-icons/ri'
import { Container } from './styles'

export function Rating({ rating }) {
  const ratingStars = [
    <RiStarLine />,
    <RiStarLine />,
    <RiStarLine />,
    <RiStarLine />,
    <RiStarLine />,
  ]

  for (let i = 0; i < rating; i++) {
    ratingStars[i] = <RiStarSFill />
  }

  return <Container>{...ratingStars}</Container>
}
