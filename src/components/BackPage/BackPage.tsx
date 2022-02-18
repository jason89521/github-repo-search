import { Container, StyledButton } from './BackPage.style';

interface BackPageProps {
  children: React.ReactNode;
  onClickBack: React.MouseEventHandler;
}

const BackPage = ({ children, onClickBack }: BackPageProps) => {
  return (
    <Container>
      <StyledButton onClick={onClickBack}>Back</StyledButton>
      {children}
    </Container>
  );
};

export default BackPage;
