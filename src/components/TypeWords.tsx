import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypeWordsProps {
  text: string;
  delay?: number; // Delay in seconds between words
  className?: string;
}

export default function TypeWords({
  text,
  delay = 0.03,
  className = "",
}: TypeWordsProps) {
  const characters = text.split("");
  const [displayedChars, setDisplayedChars] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let currentChar = 0;
      const interval = setInterval(() => {
        currentChar++;
        setDisplayedChars(currentChar);
        if (currentChar >= characters.length) {
          clearInterval(interval);
        }
      }, delay * 1000);
      return () => clearInterval(interval);
    }
  }, [isInView, characters.length, delay]);

  return (
    <span ref={containerRef} className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{
            opacity: index < displayedChars ? 1 : 0,
            filter: index < displayedChars ? "blur(0px)" : "blur(4px)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
