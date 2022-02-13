import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import InnerLayout from 'components/InnerLayout';
import Home from 'pages/Home';
import Repos from 'pages/Repos';
import Repo from 'pages/Repo';
import OuterLayout from 'components/OuterLayout';

const pageVariants = {
  init: {
    opacity: 0,
  },
  in: {
    x: ['20rem', '0rem'],
    opacity: [0, 1],
    transition: {
      type: 'spring',
      duration: 0.4,
    },
  },
  out: {
    x: '-20rem',
    opacity: 0,
    transition: {
      type: 'spring',
      duration: 0.4,
    },
  },
};

const App = () => {
  const location = useLocation();

  return (
    <OuterLayout>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={<Home variants={pageVariants} initial="init" animate="in" exit="out" />}
          />
          <Route path="users/:username/repos" element={<InnerLayout />}>
            <Route
              index
              element={<Repos variants={pageVariants} initial="init" animate="in" exit="out" />}
            />
            <Route
              path=":repo"
              element={<Repo variants={pageVariants} initial="init" animate="in" exit="out" />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </OuterLayout>
  );
};

export default App;
