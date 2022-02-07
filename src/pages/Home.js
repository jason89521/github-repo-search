import styled from 'styled-components';

import sprite from 'sprite.svg';
import Svg from 'components/Svg';
import Form from 'components/Form';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  h1 {
    font-size: 3rem;
    text-align: center;
  }
`;

const StyledSvg = styled(Svg)`
  width: 15rem;
  height: 15rem;
`;

/**
 * @param {{onFormSubmit:(data: [], username: string)=>void}} props
 */
const Home = ({ onFormSubmit }) => {
  return (
    <Container>
      <Header>
        <StyledSvg href={`${sprite}#icon-github`}></StyledSvg>
        <h1>Github Repositories</h1>
      </Header>

      <Form onFormSubmit={onFormSubmit} />
    </Container>
  );
};

export default Home;
