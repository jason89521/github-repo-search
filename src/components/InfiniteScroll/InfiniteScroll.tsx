import React, { useEffect } from 'react';
import { useIntersection } from '@yuxuan-zheng/hooks';

interface InfiniteScrollProps {
  className?: string;
  hasMore: boolean;
  isLoading: boolean;
  children: React.ReactNode;
  loader?: React.ReactNode;
  next: () => any;
}

const InfiniteScroll = ({
  className,
  hasMore,
  isLoading,
  children,
  loader,
  next,
}: InfiniteScrollProps) => {
  // this hook returns an boolean and a ref to indicate
  // whether the ref intersects with the viewport
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
