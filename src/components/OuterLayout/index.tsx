import React from 'react';

import { Container, Panel } from './style';

type PropsType = {
  children: React.ReactNode[] | React.ReactNode;
};

const OuterLayout = ({ children }: PropsType) => {
  return (
    <Container>
      <Panel>{children}</Panel>
    </Container>
  );
};

export default OuterLayout;
