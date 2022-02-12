import React, { useEffect } from 'react';
import { useIntersection } from '@yuxuan-zheng/hooks';

type InfiniteScrollProps = {
  hasMore: boolean;
  isLoading: boolean;
  children: React.ReactNode[] | React.ReactNode;
  next: () => any;
};

const InfiniteScroll = ({ hasMore, isLoading, children, next }: InfiniteScrollProps) => {
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
