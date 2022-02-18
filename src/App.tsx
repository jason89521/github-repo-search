import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { useAppSelector, useAppDispatch } from 'redux/store';
import { hide } from 'redux/modalSlice';
import Home from 'pages/Home';
import Repos from 'pages/Repos';
import Repo from 'pages/Repo';
import OuterLayout from 'pages/Base';
import InnerLayout from 'components/InnerLayout';
import Modal from 'components/Modal';
import Dialog from 'components/Dialog';

const App = () => {
  const location = useLocation();
  const modal = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();

  return (
    <>
      <Modal show={modal.show}>
        <Dialog message={modal.message} onClick={() => dispatch(hide())} />
      </Modal>
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
    </>
  );
};

export default App;
