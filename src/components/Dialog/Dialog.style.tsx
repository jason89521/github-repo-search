import styled from 'styled-components';
import { motion } from 'framer-motion';

import Color from 'styles/color';
import Button from 'components/Button';

export const containerVariants = {
  hidden: {
    y: '-100vh',
  },
  visible: {
    y: 0,
  },
};

export const Container = styled(motion.div)`
  padding: 2rem;
  width: 70%;
  min-height: 20rem;
  border-radius: 10px;
  background-color: ${Color.gray};
  color: #000;
  font-size: 3rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-around;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  background-color: #ff4757;

  &:hover {
    background-color: #ff6b81;
  }

  &:focus {
    box-shadow: 0 0 3px 3px #fff;
    transform: scale(1.1);
  }
`;
