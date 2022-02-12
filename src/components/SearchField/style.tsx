import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  list-style-type: none;
  overflow: hidden;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Item = styled.li`
  font-size: 1.5rem;
  padding: 1rem 2rem;
`;