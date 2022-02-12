import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const conainerVariants = {
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

const inputVariants = {
  isFocus: {
    width: '100%',
    borderRadius: '10px 10px 0 0 ',
  },
  isBlur: {
    borderRadius: '10rem',
    width: '50%',
  },
};

const listVariants = {
  isFocus: {
    opacity: 1,
    height: 'auto',
  },
  isBlur: {
    opacity: 0,
    height: 0,
  },
};

const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled(motion.input)`
  padding: 1rem 2rem;
  border: none;
  outline: none;
  font-size: 2rem;
`;

const List = styled(motion.ul)`
  width: 100%;
  background-color: #fff;
  color: #000;
  list-style-type: none;
  overflow: hidden;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Item = styled.li`
  font-size: 1.5rem;
  padding: 1rem 2rem;
`;

const SearchField = () => {
  const [isFocus, setIsfocus] = useState(false);

  const animate = isFocus ? 'isFocus' : 'isBlur';
  return (
    <Container initial="isBlur" animate={animate} variants={conainerVariants}>
      <Input
        variants={inputVariants}
        onFocus={() => setIsfocus(true)}
        onBlur={() => setIsfocus(false)}
      />
      <List variants={listVariants}>
        <Item>Facebook</Item>
        <Item>Google</Item>
        <Item>Dcard</Item>
      </List>
    </Container>
  );
};

export default SearchField;
