import React, { useEffect } from 'react';
import { useIntersection } from '@yuxuan-zheng/hooks';

/**
 * @param {{
 * hasMore: boolean,
 * children: React.ReactNode[],
 * next: () => void,
 * isLoading: boolean,
 * }} props
 */
const InfiniteScroll = ({ hasMore, children, next, isLoading }) => {
  const [isBottom, lastRef] = useIntersection();

  useEffect(() => {
    if (isBottom && !isLoading && hasMore) {
      next();
    }
    // Execute this effect only when the `isBottom` changes to true.
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
