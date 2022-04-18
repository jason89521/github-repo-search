import { Outlet } from 'react-router-dom';

import { Container, Panel, panelVariants } from './Base.style';

const Base = () => {
  return (
    <Container>
      <Panel variants={panelVariants} initial="init" animate="in" exit="out">
        <Outlet />
      </Panel>
    </Container>
  );
};

export default Base;
