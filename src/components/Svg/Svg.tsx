import { Container } from './Svg.style';
import sprite from 'sprite.svg';

type SvgProps = {
  className?: string;
  href: string;
};

const Svg = ({ className, href }: SvgProps) => {
  return (
    <Container className={className}>
      <use href={`${sprite}#${href}`}></use>
    </Container>
  );
};

export default Svg;
