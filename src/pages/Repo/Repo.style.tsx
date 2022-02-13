import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const IconsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Heading = styled.h1`
  display: flex;
  align-items: center;
`;
