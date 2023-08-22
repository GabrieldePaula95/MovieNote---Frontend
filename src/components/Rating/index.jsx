import { Container } from "./styles";
import { RiStarLine, RiStarSFill } from 'react-icons/ri'


export function Rating({ rating }) {
  const ratingStars = [<RiStarLine />, <RiStarLine />, <RiStarLine />, <RiStarLine />, <RiStarLine />];

  for(let i = 0; i < rating; i++ ) {
    ratingStars[i] = <RiStarSFill />;
  }

  return (
    <Container>
      {...ratingStars}
    </Container>
  );
}