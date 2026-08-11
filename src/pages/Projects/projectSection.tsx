import { Box, Stack, Typography } from "@mui/material";
import { motion, AnimatePresence } from "motion/react";
import { siteStyles } from "../../style/style";
import ProjectOverview from "../../components/project";
import { fadeInUp } from "../../utils/animationVariants";
import { useRole } from "../../context/RoleContext";

export default function ProjectSection() {
  const classes = siteStyles();
  const { activeRole } = useRole();

  return (
    <AnimatePresence>
      {activeRole === "uiux" && (
        <motion.div
          key="projects-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Box
            sx={{
              padding: { xs: "16px", sm: "40px", md: "40px 100px", lg: "80px 100px" },
            }}
          >
            <Stack>
              <Typography
                component={motion.h4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                variant="h4"
                className={classes.sectiontitle}
              >
                PROJECTS
              </Typography>
              <ProjectOverview />
            </Stack>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
