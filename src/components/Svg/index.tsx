import { Container } from './style';
import sprite from 'sprite.svg';

type PropsType = {
  className?: string;
  href: string;
};

const Svg = ({ className, href }: PropsType) => {
  return (
    <Container className={className}>
      <use href={`${sprite}#${href}`}></use>
    </Container>
  );
};

export default Svg;
