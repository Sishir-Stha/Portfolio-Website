import { motion } from 'framer-motion';
import techInterface from '@/assets/animated-tech-interface.png';

const AnimatedTechInterface = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      {/* Main tech interface */}
      <motion.div 
        className="relative z-10"
        animate={{ 
          y: [0, -10, 0],
          rotateY: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img
          src={techInterface}
          alt="Animated Tech Interface"
          className="w-96 h-72 object-contain opacity-90"
        />
      </motion.div>

      {/* Rotating gears */}
      <motion.div
        className="absolute top-16 right-16 w-16 h-16 border-4 border-primary/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border-4 border-primary/50 rounded-full relative">
          <div className="absolute top-1 left-1 w-2 h-2 bg-primary rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-primary rounded-full"></div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-2 h-2 bg-primary rounded-full"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-16 w-12 h-12 border-3 border-accent/40 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border-2 border-accent/60 rounded-full relative">
          <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-accent rounded-full"></div>
          <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 bg-accent rounded-full"></div>
          <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-accent rounded-full"></div>
        </div>
      </motion.div>

      {/* Flowing data lines */}
      <motion.div
        className="absolute top-32 left-8 w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{ 
          x: [0, 100, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 right-8 w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
        animate={{ 
          x: [0, -80, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute top-48 right-24 w-20 h-0.5 bg-gradient-to-r from-transparent via-primary/70 to-transparent rotate-45"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-24 left-24 w-4 h-4 bg-primary/60 rounded-full blur-sm"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-24 right-32 w-3 h-3 bg-accent/60 rounded-full blur-sm"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8
        }}
      />

      {/* Circuit pattern background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-16 bg-primary/30"></div>
        <div className="absolute top-1/4 left-1/4 w-16 h-2 bg-primary/30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-12 bg-accent/30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-2 bg-accent/30"></div>
      </div>
    </div>
  );
};

export default AnimatedTechInterface;