import { useEffect, useState } from 'react';
import { useDebounced } from '@yuxuan-zheng/hooks';

import { searchUser } from 'githubApi';
import { Container } from './Form.style';
import Button from 'components/Button';
import SearchField from 'components/SearchField';

interface FormProps {
  isSubmitting: boolean;
  onFormSubmit: (username: string) => void;
}

const Form = ({ isSubmitting, onFormSubmit }: FormProps) => {
  const [username, setUsername] = useState('');
  const [recommendList, setRecommendList] = useState<string[]>([]);
  const debouncedUsername = useDebounced(username, 500);

  const handleSubmit: React.FormEventHandler = e => {
    e.preventDefault();
    if (isSubmitting) return;

    onFormSubmit(username);
  };

  const onClickItem = (value: string) => {
    if (isSubmitting) return;

    onFormSubmit(value);
  };

  useEffect(() => {
    if (!/\S/.test(debouncedUsername)) return;

    // Use this value to prevent setting state after unmounted
    let cancel = false;
    const search = async () => {
      const res = await searchUser(debouncedUsername);
      if (cancel) return;

      setRecommendList(res.data.items.map((item: { login: string }) => item.login));
    };

    search();

    return () => {
      cancel = true;
    };
  }, [debouncedUsername]);

  return (
    <Container onSubmit={handleSubmit}>
      <SearchField
        data={recommendList}
        defaultString="No recommendation"
        disabled={isSubmitting}
        onChange={value => setUsername(value)}
        onClickItem={onClickItem}
      />
      <Button>Search</Button>
    </Container>
  );
};

export default Form;
