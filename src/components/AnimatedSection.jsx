import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const AnimatedSection = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    variants={sectionVariants}
    custom={delay}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.14 }}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
