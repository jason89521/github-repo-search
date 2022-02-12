import styled from 'styled-components';
import { motion } from 'framer-motion';

export const conainerVariants = {
  isFocus: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  isBlur: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

export const inputVariants = {
  isFocus: {
    width: '100%',
    borderRadius: '10px 10px 0 0 ',
  },
  isBlur: {
    borderRadius: '10rem',
    width: '50%',
  },
};

export const listVariants = {
  isFocus: {
    opacity: 1,
    maxHeight: '20rem',
  },
  isBlur: {
    opacity: 0,
    maxHeight: 0,
  },
};

export const itemVariants = {
  isFocus: {
    height: 'auto',
  },
  isBlur: {
    height: 0,
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
