import { Outlet } from 'react-router-dom';

import { Container, Panel } from './Base.style';

const Base = () => {
  return (
    <Container>
      <Panel>
        <Outlet />
      </Panel>
    </Container>
  );
};

export default Base;
