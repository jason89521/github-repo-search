import styled from 'styled-components';
import { motion } from 'framer-motion';

import Color from 'styles/color';

export const containerVariants = {
  hidden: {
    opacity: 0,
    transition: { when: 'afterChildren' },
  },
  visible: {
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
