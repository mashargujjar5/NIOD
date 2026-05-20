import { motion } from 'framer-motion';

const directionOffset = {
  left: { x: -42, y: 0 },
  right: { x: 42, y: 0 },
  up: { x: 0, y: 28 },
};

const sectionVariants = {
  hidden: ({ direction = 'up' } = {}) => ({
    opacity: 0,
    ...directionOffset[direction],
  }),
  visible: ({ delay = 0 } = {}) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const AnimatedSection = ({ children, delay = 0, direction = 'up', className = '' }) => (
  <div className={className} style={{ overflowX: 'clip' }}>
    <motion.div
      variants={sectionVariants}
      custom={{ delay, direction }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.01 }}
    >
      {children}
    </motion.div>
  </div>
);

export default AnimatedSection;
