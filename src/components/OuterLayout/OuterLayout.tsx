import React from 'react';

import { Container, Panel } from './OuterLayout.style';

interface OuterLayoutProps {
  children: React.ReactNode[] | React.ReactNode;
}

const OuterLayout = ({ children }: OuterLayoutProps) => {
  return (
    <Container>
      <Panel>{children}</Panel>
    </Container>
  );
};

export default OuterLayout;
