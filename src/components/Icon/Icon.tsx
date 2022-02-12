import { Container } from './Icon.style';
import Svg from 'components/Svg';

type IconProps = {
  message: string | number;
  href: string;
};

const Icon = ({ href, message }: IconProps) => {
  return (
    <Container>
      <Svg href={href} />
      {message}
    </Container>
  );
};

export default Icon;
