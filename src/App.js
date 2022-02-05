import styled from 'styled-components';
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import COLOR from 'styles/color';
import Home from 'components/Home';
import Repos from 'components/Repos';
import Repo from 'components/Repo';

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
  background-color: ${COLOR.background};
  color: ${COLOR.text};
`;

/**
 * @type {React.Context<import('type').Repos[]>}
 */
export const ReposContext = React.createContext([]);

const App = () => {
  /**
   * @type {[import('type').Repos[], React.Dispatch<React.SetStateAction<any[]>>]}
   */
  const [repos, setRepos] = useState([]);
  const navigate = useNavigate();

  const onFormSubmit = (data, username) => {
    navigate(`/users/${username}/repos`);
    setRepos(data);
    console.log(data);
  };

  return (
    <ReposContext.Provider value={repos}>
      <Container>
        <Panel>
          <Routes>
            <Route path="/" element={<Home onFormSubmit={onFormSubmit} />} />
            <Route path="users/:username/repos" element={<Repos />} />
            <Route path="users/:username/repos/:repo" element={<Repo />} />
          </Routes>
        </Panel>
      </Container>
    </ReposContext.Provider>
  );
};

export default App;
