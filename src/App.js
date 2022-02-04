import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Home from 'components/Home';
import Repos from 'components/Repos';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2f3542;
`;

const Panel = styled.div`
  height: 90%;
  width: 60%;
  padding: 5rem;
  border-radius: 10px;
  background-color: #f1f2f6;
`;

const App = () => {
  return (
    <Container>
      <Panel>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/:username/repos" element={<Repos />}></Route>
        </Routes>
      </Panel>
    </Container>
  );
};

export default App;
