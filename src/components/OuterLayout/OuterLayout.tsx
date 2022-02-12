import React from 'react';

import { Container, Panel } from './OuterLayout.style';

type OuterLayoutProps = {
  children: React.ReactNode[] | React.ReactNode;
};

const OuterLayout = ({ children }: OuterLayoutProps) => {
  return (
    <Container>
      <Panel>{children}</Panel>
    </Container>
  );
};

export default OuterLayout;
