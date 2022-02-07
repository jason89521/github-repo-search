import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useCallback, useState } from 'react';

import InnerLayout from 'components/InnerLayout';
import Home from 'pages/Home';
import Repos from 'pages/Repos';
import Repo from 'pages/Repo';
import OuterLayout from 'components/OuterLayout';
import { fetchRepos } from 'githubApi';
import Modal from 'components/Modal';
import Dialog from 'components/Dialog ';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const showError = useCallback(response => {
    setErrorMsg(response.data.message);
    setIsModalShow(true);
  }, []);

  const onFormSubmit = async newUsername => {
    let data;
    try {
      const response = await fetchRepos(newUsername);
      data = response.data;
    } catch (error) {
      error.response && showError(error.response);
      return;
    }

    setRepos(data);
    setHasMore(data.length > 0);
    setUsername(newUsername);
    setPageNumber(1);
    setIsLoading(false);
    navigate(`/users/${newUsername}/repos`);
  };

  const fetchNext = useCallback(async () => {
    setIsLoading(true);
    let data;
    try {
      const response = await fetchRepos(username, pageNumber + 1);
      data = response.data;
    } catch (error) {
      error.response && showError(error.response);
      return;
    }

    setRepos(prev => [...prev, ...data]);
    setPageNumber(pageNumber + 1);
    setHasMore(data.length > 0);
    setIsLoading(false);
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
          <Route
            index
            element={
              <Repos fetchNext={fetchNext} isLoading={isLoading} hasMore={hasMore} repos={repos} />
            }
          />
          <Route path=":repo" element={<Repo />} />
        </Route>
      </Routes>
    </OuterLayout>
  );
};

export default App;
