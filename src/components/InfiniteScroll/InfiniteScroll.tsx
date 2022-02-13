import React, { useEffect } from 'react';
import { useIntersection } from '@yuxuan-zheng/hooks';

type InfiniteScrollProps = {
  className?: string;
  hasMore: boolean;
  isLoading: boolean;
  children: React.ReactNode[] | React.ReactNode;
  loader?: React.ReactNode;
  next: () => any;
};

const InfiniteScroll = ({
  className,
  hasMore,
  isLoading,
  children,
  loader,
  next,
}: InfiniteScrollProps) => {
  const [isBottom, lastRef] = useIntersection();

  useEffect(() => {
    if (isBottom && !isLoading && hasMore) {
      next();
    }
    // Execute this effect only when the `isBottom` changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBottom]);

  return (
    <div className={className}>
      {children}
      <div ref={lastRef}>{isLoading && loader}</div>
    </div>
  );
};

export default InfiniteScroll;
