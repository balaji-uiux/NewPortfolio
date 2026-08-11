import { Box, Grid, Stack, Typography } from "@mui/material";
import { motion, AnimatePresence } from "motion/react";
import { siteStyles } from "../../style/style";
import { ImageAssets } from "../../assets/imageAssets/image";
import "../../App.css";
import { fadeInUp } from "../../utils/animationVariants";
import SplitText from "../../components/SplitText";
import TypeWords from "../../components/TypeWords";
import RoleToggle from "../../components/RoleToggle";
import { useRole } from "../../context/RoleContext";
import { useScroll, useTransform } from "motion/react";

const uiuxDesc =
  "I design intuitive and user-friendly experiences by applying UX principles to solve complex challenges.";
const videoDesc =
  "2+ years crafting compelling visual stories through video editing, motion design, and AI-assisted creative workflows.";

const uiuxQuote =
  '"As a UI/UX Designer, I create user-friendly experiences through wireframing, prototyping, and design systems."';
const videoQuote =
  '"As a Video Editor & Motion Designer, I bring ideas to life through cinematic storytelling, motion graphics, and visual composition."';

const textVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.22, ease: "easeIn" },
  },
};

export default function HeroSection() {
  const classes = siteStyles();
  const { activeRole } = useRole();
  const { scrollY } = useScroll();
  const imageScale = useTransform(scrollY, [0, 600], [1, 1.2]);

  return (
    <Box
      sx={{
        overflow: { xs: "hidden", sm: "hidden", md: "hidden", lg: "visible" },
      }}
      className={classes.homepage}
    >
      <Grid className={classes.ellipsebackground}>
        <span className="ellipse-large"></span>
        <span className="ellipse-small"></span>
      </Grid>
      <Grid className={classes.herosection} sx={{ py: { xs: 10 } }}>
        <Grid
          container
          className={classes.textcontent}
          sx={{ px: { xs: 1, sm: 5 }, pt: { xs: 5, sm: 10 }, pb: { xs: 5 } }}
        >
          <Grid>
            <Typography component="div" variant="h1" className="title">
              <SplitText text="Hi there," className="greetings" delay={0.1} />
              <SplitText text="I'm Balaji," className="name" delay={0.3} />
            </Typography>
          </Grid>

          {/* Role Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.45, ease: "easeOut" }}
            style={{ marginBottom: "24px" }}
          >
            <RoleToggle />
          </motion.div>

          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
            <Typography
              component="div"
              variant="subtitle1"
              className="subtitle"
              sx={{
                textAlign: "center",
                fontSize: { xs: "16px", sm: "24px" },
                lineHeight: { xs: "24px", sm: "38px" },
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRole + "-desc"}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <TypeWords
                    text={activeRole === "uiux" ? uiuxDesc : videoDesc}
                    className="profileDesc"
                    delay={0.03}
                  />
                </motion.div>
              </AnimatePresence>
              <span className="topleft"></span>
              <span className="bottomleft"></span>
              <span className="topright"></span>
              <span className="bottomright"></span>
            </Typography>
          </Grid>
        </Grid>
        {/* Text Content */}
        <Grid container sx={{ justifyContent: "center" }}>
          <Stack
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              ...fadeInUp,
              visible: {
                ...fadeInUp.visible,
                transition: {
                  ...fadeInUp.visible.transition,
                  delay: 0.9,
                },
              },
            }}
            direction="column"
            spacing={1}
            className={classes.imagecontent}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "880px",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole + "-quote"}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ width: "100%" }}
              >
                <Typography
                  variant="subtitle1"
                  className="aboutme"
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "14px", sm: "16px" },
                    lineHeight: { xs: "22px", sm: "24px" },
                  }}
                >
                  {activeRole === "uiux" ? uiuxQuote : videoQuote}
                </Typography>
              </motion.div>
            </AnimatePresence>
            <motion.img
              className="profileimg"
              src={ImageAssets.image}
              alt="Balaji — UI/UX Designer & Video Editor"
              style={{ scale: imageScale }}
            />
          </Stack>
        </Grid>
        {/* Image Content */}
      </Grid>
      {/* End of Hero Section */}
    </Box>
  );
}
