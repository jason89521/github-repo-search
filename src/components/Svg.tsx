import styled from 'styled-components';

type PropsType = {
  className?: string;
  href: string;
};

const Container = styled.svg`
  fill: #fff;
  width: 2rem;
  height: 2rem;
`;

const Svg = ({ className, href }: PropsType) => {
  return (
    <Container className={className}>
      <use href={href}></use>
    </Container>
  );
};

export default Svg;
