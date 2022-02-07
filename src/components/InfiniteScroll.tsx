import React, { useEffect } from 'react';
import { useIntersection } from '@yuxuan-zheng/hooks';

type PropsType = {
  hasMore: boolean;
  children: React.ReactNode[] | React.ReactNode;
  next: () => void;
  isLoading: boolean;
};

const InfiniteScroll = ({ hasMore, children, next, isLoading }: PropsType) => {
  const [isBottom, lastRef] = useIntersection();

  useEffect(() => {
    if (isBottom && !isLoading && hasMore) {
      next();
    }
    // Execute this effect only when the `isBottom` changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBottom]);

  return (
    <div>
      {children}
      <div ref={lastRef}></div>
    </div>
  );
};

export default InfiniteScroll;
