import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface Scene3DProps {
  children: ReactNode;
  className?: string;
}

export const Scene3D = ({ children, className = "" }: Scene3DProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ perspective: "1200px" }}>
      {children}
    </div>
  );
};

interface Parallax3DProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export const Parallax3D = ({ children, offset = 100, className = "" }: Parallax3DProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface Float3DProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const Float3D = ({ children, delay = 0, duration = 6, className = "" }: Float3DProps) => {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotateX: [-2, 2, -2],
        rotateY: [-3, 3, -3],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      className={className}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

interface Tilt3DCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export const Tilt3DCard = ({ children, className = "", intensity = 10 }: Tilt3DCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;
    
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };
  
  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out"
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
};

interface GlowOrbProps {
  color?: string;
  size?: string;
  position?: string;
  blur?: string;
  delay?: number;
}

export const GlowOrb = ({ 
  color = "primary", 
  size = "w-64 h-64", 
  position = "", 
  blur = "blur-3xl",
  delay = 0 
}: GlowOrbProps) => {
  return (
    <motion.div
      className={`absolute ${size} ${position} bg-${color}/20 rounded-full ${blur} pointer-events-none`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    />
  );
};
