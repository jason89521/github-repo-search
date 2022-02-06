import styled from 'styled-components';

const Container = styled.svg`
  fill: #fff;
  width: 2rem;
  height: 2rem;
`;

const Svg = ({ className, href }) => {
  return (
    <Container className={className}>
      <use href={href}></use>
    </Container>
  );
};

export default Svg;
