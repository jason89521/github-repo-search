import { useState } from 'react';
import Color from 'styles/color';

import {
  conainerVariants,
  inputVariants,
  listVariants,
  Container,
  Input,
  List,
  Item,
} from './SearchField.style';

type SearchFieldProps = {
  defaultString: string;
  data: string[];
  disabled: boolean;
  onChange: (value: string) => void;
  onClickItem: (value: string) => void;
};

const SearchField = ({
  defaultString,
  data,
  disabled,
  onChange,
  onClickItem,
}: SearchFieldProps) => {
  const [isFocus, setIsfocus] = useState(false);
  const [value, setValue] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  // If the data array is empty, show the default string.
  const renderedItems =
    data.length > 0 ? (
      data.map((value, idx) => (
        <Item
          key={idx}
          whileHover={{ backgroundColor: Color.gray, cursor: 'pointer' }}
          onClick={() => onClickItem(value)}
        >
          {value}
        </Item>
      ))
    ) : (
      <Item>{defaultString}</Item>
    );
  const animate = isFocus ? 'focus' : 'blur';
  return (
    <Container initial="blur" animate={animate} variants={conainerVariants}>
      <Input
        disabled={disabled}
        placeholder="Enter an username"
        value={value}
        variants={inputVariants}
        onChange={handleChange}
        onFocus={() => setIsfocus(true)}
        onBlur={() => setIsfocus(false)}
      />
      <List variants={listVariants} transition={{ type: 'tween' }}>
        {renderedItems}
      </List>
    </Container>
  );
};

export default SearchField;
