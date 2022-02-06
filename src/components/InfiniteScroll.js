import React, { useEffect } from 'react';
import { useIntersection } from '@yuxuan-zheng/hooks';

const InfiniteScroll = ({ hasMore, children, next, isLoading }) => {
  const [isBottom, lastRef] = useIntersection();

  useEffect(() => {
    if (!isBottom || isLoading || !hasMore) return;

    // Should wait for all dependencies to be debounced.
    const timeoutId = setTimeout(() => {
      next();
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [isBottom, isLoading, hasMore, next]);

  return (
    <div>
      {children}
      <div ref={lastRef}></div>
    </div>
  );
};

export default InfiniteScroll;
