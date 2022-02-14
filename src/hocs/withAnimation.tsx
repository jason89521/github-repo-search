import { motion } from 'framer-motion';

const variants = {
  init: {
    opacity: 0,
  },
  in: {
    x: ['20rem', '0rem'],
    opacity: [0, 1],
    transition: {
      type: 'spring',
      duration: 0.4,
    },
  },
  out: {
    x: '-20rem',
    opacity: 0,
    transition: {
      type: 'spring',
      duration: 0.4,
    },
  },
};

const withAnimation = <T extends {}>(WrappedComponent: React.ComponentType<T>) => {
  const ComponentWithAnimation = (props: T) => {
    return (
      <motion.div variants={variants} initial="init" animate="in" exit="out">
        <WrappedComponent {...props} />
      </motion.div>
    );
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name;
  ComponentWithAnimation.displayName = `withAnimation(${displayName})`;

  return ComponentWithAnimation;
};

export default withAnimation;
