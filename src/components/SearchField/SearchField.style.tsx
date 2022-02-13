import styled from 'styled-components';
import { motion } from 'framer-motion';

export const conainerVariants = {
  focus: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  blur: {
    transition: {
      staggerChildren: 0.4,
      staggerDirection: -1,
    },
  },
};

export const inputVariants = {
  focus: {
    width: '100%',
    borderRadius: '10px 10px 0 0 ',
  },
  blur: {
    borderRadius: '10rem',
    width: '50%',
  },
};

export const listVariants = {
  focus: {
    opacity: 1,
    maxHeight: '20rem',
  },
  blur: {
    opacity: 0,
    maxHeight: 0,
  },
};

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(motion.input)`
  padding: 1rem 2rem;
  border: none;
  outline: none;
  font-size: 2rem;
`;

export const List = styled(motion.ul)`
  width: 100%;
  background-color: #fff;
  color: #000;
  overflow: hidden;
  border-radius: 0 0 10px 10px;
`;

export const Item = styled(motion.li)`
  font-size: 1.5rem;
  padding: 1rem 2rem;
`;
