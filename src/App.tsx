import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import InnerLayout from 'components/InnerLayout';
import Home from 'pages/Home';
import Repos from 'pages/Repos';
import Repo from 'pages/Repo';
import OuterLayout from 'components/OuterLayout';

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<OuterLayout />}>
          <Route index element={<Home />} />
          <Route path="users/:username/repos" element={<InnerLayout />}>
            <Route index element={<Repos />} />
            <Route path=":repo" element={<Repo />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
