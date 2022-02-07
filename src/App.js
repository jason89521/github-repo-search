import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import Layout from 'components/InnerLayout';
import Home from 'pages/Home';
import Repos from 'pages/Repos';
import Repo from 'pages/Repo';
import OuterLayout from 'components/OuterLayout';
import { fetchRepos } from 'githubApi';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const onFormSubmit = async newUsername => {
    let data;
    try {
      const response = await fetchRepos(newUsername);
      data = response.data;
    } catch (error) {
      const response = error.response;
      if (response) {
        setErrorMsg(response.data.message);
        setIsModalShow(true);
      }
      return;
    }

    setRepos(data);
    setHasMore(data.length > 0);
    setUsername(newUsername);
    setPageNumber(1);
    setIsLoading(false);
    navigate(`/users/${newUsername}/repos`);
  };

  const fetchNext = async () => {
    setIsLoading(true);
    try {
      const response = await fetchRepos(username, pageNumber + 1);
      setRepos([...repos, ...response.data]);
      setPageNumber(pageNumber + 1);
      setHasMore(response.data.length > 0);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const hideModal = () => {
    setIsModalShow(false);
  };

  return (
    <OuterLayout>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onFormSubmit={onFormSubmit}
              errorMsg={errorMsg}
              isModalShow={isModalShow}
              hideModal={hideModal}
            />
          }
        />
        <Route path="users/:username/repos" element={<Layout />}>
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
