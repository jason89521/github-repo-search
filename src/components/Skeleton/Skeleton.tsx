import { motion } from 'framer-motion';

interface SkeletonProps {
  width?: string;
  height?: string;
}

const Skeleton = ({ width = '100%', height = '10rem' }: SkeletonProps) => {
  return (
    <motion.div
      style={{ width, height }}
      initial={{ backgroundColor: '#333' }}
      animate={{ backgroundColor: '#999' }}
      transition={{
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 1,
      }}
    ></motion.div>
  );
};

export default Skeleton;
