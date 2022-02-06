import styled from 'styled-components';
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import Color from 'styles/color';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Repos from 'pages/Repos';
import Repo from 'pages/Repo';
import { fetchRepos } from 'githubApi';

const Container = styled.div`
  padding: 5rem 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #2f3542;
  overflow: auto;
`;

const Panel = styled.div`
  width: 60%;
  padding: 5rem;
  border-radius: 10px;
  background-color: ${Color.background};
  color: ${Color.text};
`;

/**
 * @type {React.Context<import('type').Repo[]>}
 */
export const ReposContext = React.createContext([]);

const App = () => {
  /**
   * @type {[import('type').Repo[], React.Dispatch<React.SetStateAction<any[]>>]}
   */
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const navigate = useNavigate();

  const onFormSubmit = (data, newUsername) => {
    navigate(`/users/${newUsername}/repos`);
    setRepos(data);
    setUsername(newUsername);
    setPageNumber(1);
    setHasMore(data.length > 0);
    setIsLoading(false);
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

  return (
    <ReposContext.Provider value={repos}>
      <Container>
        <Panel>
          <Routes>
            <Route path="/" element={<Home onFormSubmit={onFormSubmit} />} />
            <Route path="users/:username/repos" element={<Layout />}>
              <Route
                index
                element={<Repos fetchNext={fetchNext} isLoading={isLoading} hasMore={hasMore} />}
              />
              <Route path=":repo" element={<Repo />} />
            </Route>
          </Routes>
        </Panel>
      </Container>
    </ReposContext.Provider>
  );
};

export default App;
