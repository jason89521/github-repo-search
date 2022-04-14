import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Base from 'pages/Base';
import Home from 'pages/Home';
import Repos from 'pages/Repos';
import Repo from 'pages/Repo';

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
          <Route path="users/:username/repos">
            <Route index element={<Repos />} />
            <Route path=":repo" element={<Repo />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
