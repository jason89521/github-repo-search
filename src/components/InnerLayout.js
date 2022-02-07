import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';

import Button from 'components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StyledButton = styled(Button)`
  align-self: center;
`;

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
