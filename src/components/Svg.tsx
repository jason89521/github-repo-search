import styled from 'styled-components';

const Container = styled.svg`
  fill: #fff;
  width: 2rem;
  height: 2rem;
`;

type SvgProps = {
  className?: string;
  href: string;
};

const Svg = ({ className, href }: SvgProps) => {
  return (
    <Container className={className}>
      <use href={href}></use>
    </Container>
  );
};

export default Svg;
