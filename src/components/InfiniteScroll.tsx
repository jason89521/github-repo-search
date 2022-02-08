import React, { useEffect, useState } from 'react';
import { useIntersection } from '@yuxuan-zheng/hooks';

type PropsType = {
  hasMore: boolean;
  children: React.ReactNode[] | React.ReactNode;
  next: () => Promise<any>;
};

const InfiniteScroll = ({ hasMore, children, next }: PropsType) => {
  const [isBottom, lastRef] = useIntersection();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const callNext = async () => {
      setisLoading(true);
      await next();
      setisLoading(false);
    };

    if (isBottom && !isLoading && hasMore) {
      callNext();
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
