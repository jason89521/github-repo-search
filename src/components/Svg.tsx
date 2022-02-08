import styled from 'styled-components';

import sprite from 'sprite.svg';

type PropsType = {
  className?: string;
  href: string;
};

const Container = styled.svg`
  fill: #fff;
  width: 1.6rem;
  height: 1.6rem;
`;

const Svg = ({ className, href }: PropsType) => {
  return (
    <Container className={className}>
      <use href={`${sprite}#${href}`}></use>
    </Container>
  );
};

export default Svg;
