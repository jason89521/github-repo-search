import { useState } from 'react';

import { Container, Input, List, Item } from './style';

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

type SearchFieldProps = {
  onChange: (value: string) => void;
};

const SearchField = ({ onChange }: SearchFieldProps) => {
  const [isFocus, setIsfocus] = useState(false);
  const [value, setValue] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  const animate = isFocus ? 'isFocus' : 'isBlur';
  return (
    <Container initial="isBlur" animate={animate} variants={conainerVariants}>
      <Input
        value={value}
        variants={inputVariants}
        onChange={handleChange}
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
