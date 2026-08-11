import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import SplitText from "./SplitText";

interface Props {
  id: string;
  targetId: string;
  title: string;
}

export default function SectionTransition({ id, targetId, title }: Props) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isInView, targetId]);

  return (
    <Box
      id={id}
      ref={containerRef}
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.02)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "var(--PopMedium)",
          color: "#17181A",
          fontSize: { xs: "40px", md: "80px" },
          textAlign: "center",
        }}
      >
        {isInView ? (
          <SplitText text={title} delay={0.05} />
        ) : (
          <span style={{ opacity: 0 }}>{title}</span>
        )}
      </Typography>
    </Box>
  );
}
