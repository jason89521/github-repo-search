import { Routes, Route, useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import { RepoType } from 'type';
import InnerLayout from 'components/InnerLayout';
import Home from 'pages/Home';
import Repos from 'pages/Repos';
import Repo from 'pages/Repo';
import OuterLayout from 'components/OuterLayout';
import { fetchRepos } from 'githubApi';
import Modal from 'components/Modal';
import Dialog from 'components/Dialog ';

const App = () => {
  const [repos, setRepos] = useState<RepoType[]>([]);
  const [username, setUsername] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const showError = useCallback((response: AxiosResponse) => {
    setErrorMsg(response.data.message);
    setIsModalShow(true);
  }, []);

  const onFormSubmit = async (newUsername: string) => {
    let data: RepoType[];
    try {
      data = (await fetchRepos(newUsername)).data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        error.response && showError(error.response);
      }
      return;
    }

    setRepos(data);
    setHasMore(data.length > 0);
    setUsername(newUsername);
    setPageNumber(1);
    navigate(`/users/${newUsername}/repos`);
  };

  const fetchNext = useCallback(async () => {
    let data: RepoType[];
    try {
      const response = await fetchRepos(username, pageNumber + 1);
      data = response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        error.response && showError(error.response);
      }
      return;
    }

    setRepos(prev => [...prev, ...data]);
    setPageNumber(pageNumber + 1);
    setHasMore(data.length > 0);
  }, [username, pageNumber, showError]);

  return (
    <OuterLayout>
      {isModalShow ? (
        <Modal>
          <Dialog message={errorMsg} onClick={() => setIsModalShow(false)} />
        </Modal>
      ) : null}
      <Routes>
        <Route path="/" element={<Home onFormSubmit={onFormSubmit} />} />
        <Route path="users/:username/repos" element={<InnerLayout />}>
          <Route index element={<Repos fetchNext={fetchNext} hasMore={hasMore} repos={repos} />} />
          <Route path=":repo" element={<Repo />} />
        </Route>
      </Routes>
    </OuterLayout>
  );
};

export default App;
