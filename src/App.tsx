import { Routes, Route } from 'react-router-dom';

import InnerLayout from 'components/InnerLayout';
import Home from 'pages/Home';
import Repos from 'pages/Repos';
import Repo from 'pages/Repo';
import OuterLayout from 'components/OuterLayout';

const App = () => {
  return (
    <OuterLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/:username/repos" element={<InnerLayout />}>
          <Route index element={<Repos />} />
          <Route path=":repo" element={<Repo />} />
        </Route>
      </Routes>
    </OuterLayout>
  );
};

export default App;
