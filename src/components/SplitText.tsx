import { motion } from "motion/react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  textAlign?: "left" | "center" | "right";
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  duration = 0.5,
  textAlign = "center",
}: SplitTextProps) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      style={{ display: "inline-block", textAlign }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block", willChange: "transform, opacity" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
