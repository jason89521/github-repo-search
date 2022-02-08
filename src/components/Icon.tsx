import styled from 'styled-components';

import Svg from 'components/Svg';

type PropsType = {
  message: string | number;
  href: string;
};

const Container = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Icon = ({ href, message }: PropsType) => {
  return (
    <Container>
      <Svg href={href} />
      {message}
    </Container>
  );
};

export default Icon;
