import { Outlet, useNavigate } from 'react-router-dom';

import { Container, StyledButton } from './style';

const InnerLayout = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <StyledButton onClick={() => navigate(-1)}>Back</StyledButton>
      <Outlet />
    </Container>
  );
};

export default InnerLayout;
