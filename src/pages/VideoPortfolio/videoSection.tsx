import { Box, Grid, Stack, Typography } from "@mui/material";
import { motion, AnimatePresence } from "motion/react";
import { siteStyles } from "../../style/style";
import VideoPlayer from "../../components/VideoPlayer";
import { fadeInUp } from "../../utils/animationVariants";
import { useRole } from "../../context/RoleContext";

export default function VideoSection() {
  const classes = siteStyles();
  const { activeRole } = useRole();

  return (
    <AnimatePresence>
      {activeRole === "video" && (
        <motion.div
          key="video-section"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Box
            id="video-portfolio"
            sx={{
              padding: {
                xs: "16px",
                sm: "40px",
                md: "40px 100px",
                lg: "80px 100px",
              },
            }}
          >
            <Stack spacing={{ xs: 1, sm: 3 }}>
              {/* Section header */}
              <Box>
                <Typography
                  component={motion.h4}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeInUp}
                  variant="h4"
                  className={classes.sectiontitle}
                  sx={{ mb: 0.5 }}
                >
                  CREATIVE VIDEO WORK
                </Typography>
                <Typography
                  component={motion.p}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeInUp}
                  variant="body1"
                  sx={{
                    fontFamily: "var(--OpenSansItalic)",
                    color: "#656D75",
                    fontSize: { xs: "14px", sm: "16px" },
                    lineHeight: "26px",
                  }}
                >
                  Storytelling · Editing · Motion Design · Visual Direction
                </Typography>
              </Box>

              {/* Stats row */}
              <Grid
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                container
                spacing={2}
                sx={{ mb: 1 }}
              >
                {[
                  { value: "2+", label: "Years Experience" },
                  { value: "9", label: "Video Projects" },
                  { value: "3+", label: "Content Series" },
                ].map((stat) => (
                  <Grid key={stat.label} size={{ xs: 4, sm: 4, md: 3 }}>
                    <Box className="video-stat-card">
                      <Typography className="video-stat-value">
                        {stat.value}
                      </Typography>
                      <Typography className="video-stat-label">
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Video Player */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              >
                <VideoPlayer />
              </motion.div>
            </Stack>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
