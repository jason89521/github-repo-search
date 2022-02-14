import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Panel } from './OuterLayout.style';

const OuterLayout = () => {
  return (
    <Container>
      <Panel>
        <Outlet />
      </Panel>
    </Container>
  );
};

export default OuterLayout;
