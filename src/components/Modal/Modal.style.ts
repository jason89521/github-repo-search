import styled from 'styled-components';
import { motion } from 'framer-motion';

import Color from 'styles/color';
import Button from 'components/Button';

export const containerVariants = {
  hidden: {
    opacity: 0,
    transition: { when: 'afterChildren' },
  },
  visible: {
    opacity: 1,
  },
};

export const dialogVariants = {
  hidden: {
    y: '-200%',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${Color.text};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dialog = styled(motion.div)`
  padding: 2rem;
  min-width: 30rem;
  max-width: 70%;
  min-height: 17.5rem;
  border-radius: 10px;
  background-color: ${Color.gray};
  color: #000;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  hyphens: auto;
`;

export const CloseButton = styled(Button)`
  background-color: #ff4757;
  align-self: center;

  &:hover {
    background-color: #ff6b81;
  }

  &:focus {
    box-shadow: 0 0 3px 3px #fff;
    transform: scale(1.1);
  }
`;
