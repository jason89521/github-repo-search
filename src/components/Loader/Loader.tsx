import { Container } from './Loader.style';

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <Container
      className={className}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        type: 'tween',
        ease: 'linear',
        duration: 1,
      }}
    ></Container>
  );
};

export default Loader;
