import { useEffect, useState } from 'react';
import { useDebounced } from '@yuxuan-zheng/hooks';

import { Container } from './Form.style';
import Button from 'components/Button';
import SearchField from 'components/SearchField';

interface FormProps {
  isSubmitting: boolean;
  onFormSubmit: (username: string) => void;
  onDebounced: (debounced: string) => Promise<string[]>;
}

const Form = ({ isSubmitting, onFormSubmit, onDebounced }: FormProps) => {
  const [username, setUsername] = useState('');
  const [recommendList, setRecommendList] = useState<string[]>([]);
  // this hook return debounced value when the value didn't change for 500 ms
  const debouncedUsername = useDebounced(username, 500);

  const handleSubmit: React.FormEventHandler = e => {
    e.preventDefault();
    if (isSubmitting) return;

    onFormSubmit(username);
  };

  const handleClickItem = (value: string) => {
    if (isSubmitting) return;

    onFormSubmit(value);
  };

  useEffect(() => {
    if (!/\S/.test(debouncedUsername)) return;

    let cancel = false; // Use this value to prevent setting state after unmounted
    const search = async () => {
      const data = await onDebounced(debouncedUsername);
      if (cancel) return;

      setRecommendList(data);
    };

    search();
    return () => {
      cancel = true;
    };
  }, [debouncedUsername, onDebounced]);

  return (
    <Container onSubmit={handleSubmit}>
      <SearchField
        data={recommendList}
        defaultString="No recommendation"
        disabled={isSubmitting}
        onChange={value => setUsername(value)}
        onClickItem={handleClickItem}
      />
      <Button>Search</Button>
    </Container>
  );
};

export default Form;
