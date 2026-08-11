import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import SchemaOutlinedIcon from "@mui/icons-material/SchemaOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { motion, AnimatePresence } from "motion/react";
import { ImageAssets } from "../../assets/imageAssets/image";
import { siteStyles } from "../../style/style";
import WorkExperience from "../../components/workexperience";
import { useRole } from "../../context/RoleContext";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "../../utils/animationVariants";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

interface SkillGroupProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

function SkillGroup({ icon, title, skills }: SkillGroupProps) {
  return (
    <Grid sx={{ mb: 2 }}>
      <Typography
        variant="h6"
        className="skilltitle"
        sx={{ display: "flex", alignItems: "center", gap: "8px" }}
      >
        {icon}
        {title}
      </Typography>
      <Stack
        direction="row"
        className="skillset"
        divider={
          <FiberManualRecordRoundedIcon
            sx={{ fontSize: "8px", color: "#4A4E54" }}
          />
        }
        sx={{ alignItems: "center", gap: "8px" }}
      >
        {skills.map((s, i) => (
          <p key={i}>{s}</p>
        ))}
      </Stack>
    </Grid>
  );
}

export default function AboutSection() {
  const classes = siteStyles();
  const { activeRole } = useRole();

  // ── UI/UX Skills ──
  const uxskills = [
    "User Experience Design",
    "UX Strategy",
    "User Research",
    "User Persona",
    "User Journey Map",
    "Root Cause Analysis",
    "Information Architecture",
    "Layout Design",
    "Rapid Prototype",
    "Usability Testing",
  ];
  const uiskills = [
    "User Interface Design",
    "Grid Systems",
    "Wireframing",
    "Design Systems",
    "Style Guides",
    "Visual Hierarchy",
    "Accessibility Standards",
    "Interactive Design",
    "Responsive Web Design",
    "Prototyping",
  ];
  const frontend = ["HTML5", "CSS3", "ReactTSX", "Bootstrap", "MUI"];

  // ── Video Editing Skills ──
  const videoEditingSkills = [
    "Video Editing",
    "Timeline Editing",
    "Cutting & Trimming",
    "Pacing",
    "Video Composition",
    "Transitions",
    "B-roll Editing",
    "Short-form Editing",
    "Long-form Editing",
  ];
  const storytellingSkills = [
    "Visual Storytelling",
    "Narrative Structure",
    "Story Development",
    "Content Flow",
    "Audience Retention",
    "Visual Communication",
  ];
  const motionSkills = [
    "Motion Graphics",
    "Kinetic Typography",
    "Text Animation",
    "Logo Animation",
    "UI Motion",
    "Visual Effects",
    "Basic 2D Animation",
  ];
  const audioSkills = [
    "Audio Editing",
    "Sound Design",
    "Voice-over Sync",
    "Music Synchronization",
    "Audio Cleanup",
    "Sound Effects",
  ];
  const colorSkills = [
    "Basic Color Correction",
    "Color Grading",
    "Visual Consistency",
  ];
  const aiVideoSkills = [
    "AI-assisted Video Creation",
    "AI-generated Visuals",
    "AI-assisted Storyboarding",
    "AI Video Workflow",
    "Generative Visual Content",
  ];

  return (
    <Box
      sx={{
        padding: { xs: "16px", sm: "40px", md: "40px 100px", lg: "80px 100px" },
      }}
    >
      {/* ABOUT */}
      <Stack spacing={{ xs: 1, sm: 3 }}>
        <Typography
          component={motion.h4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          variant="h4"
          className={classes.sectiontitle}
        >
          ABOUT
        </Typography>

        <AnimatePresence mode="wait">
          {activeRole === "uiux" ? (
            <motion.div
              key="uiux-about"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* ── UI/UX Layout ── */}
              <Grid
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                container
                spacing={2}
                sx={{ flexDirection: "row" }}
                className={classes.aboutcontent}
              >
                {/* Left: bio + tools */}
                <Grid
                  component={motion.div}
                  variants={fadeInLeft}
                  size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                  sx={{ borderRight: { md: "1px solid #E5E7E8" }, p: 1 }}
                >
                  <Typography
                    variant="body1"
                    className="aboutme"
                    sx={{ mb: 2 }}
                  >
                    I'm a UI/UX Designer with over two years of experience. I
                    specialise in wireframes, prototypes, and responsive
                    layouts, enhancing usability and accessibility. My work at
                    Thirdeye Info Technology and UX Mint involved building
                    design systems, conducting user research, and collaborating
                    with developers to create seamless user experiences.
                  </Typography>
                  <Grid
                    component={motion.div}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    container
                    spacing={3}
                    className="tools"
                    sx={{ p: 1 }}
                  >
                    <motion.img
                      variants={staggerItem}
                      src={ImageAssets.figma}
                      alt="Figma"
                    />
                    <motion.img
                      variants={staggerItem}
                      src={ImageAssets.illustrator}
                      alt="Adobe Illustrator"
                    />
                    <motion.img
                      variants={staggerItem}
                      src={ImageAssets.framer}
                      alt="Framer"
                    />
                    <motion.img
                      variants={staggerItem}
                      src={ImageAssets.XD}
                      alt="Adobe XD"
                    />
                  </Grid>
                </Grid>

                {/* Right: skills */}
                <Grid
                  component={motion.div}
                  variants={fadeInRight}
                  size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                  sx={{ p: 1 }}
                >
                  <SkillGroup
                    icon={<SchemaOutlinedIcon />}
                    title="UX Design"
                    skills={uxskills}
                  />
                  <SkillGroup
                    icon={<DesignServicesOutlinedIcon />}
                    title="UI Design"
                    skills={uiskills}
                  />
                  <SkillGroup
                    icon={<CodeOutlinedIcon />}
                    title="Frontend Development"
                    skills={frontend}
                  />
                </Grid>
              </Grid>
            </motion.div>
          ) : (
            <motion.div
              key="video-about"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* ── Video Editor Layout ── */}
              <Grid
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                container
                spacing={2}
                sx={{ flexDirection: "row" }}
                className={classes.aboutcontent}
              >
                {/* Left: bio + video tools */}
                <Grid
                  component={motion.div}
                  variants={fadeInLeft}
                  size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                  sx={{ borderRight: { md: "1px solid #E5E7E8" }, p: 1 }}
                >
                  <Typography
                    variant="body1"
                    className="aboutme"
                    sx={{ mb: 2 }}
                  >
                    I'm a Video Editor & Motion Designer with 2+ years of
                    experience creating engaging visual content. I specialise in
                    short-form and long-form video editing, motion graphics,
                    kinetic typography, and AI-assisted creative workflows —
                    crafting stories that captivate, inform, and inspire.
                  </Typography>
                  <Grid
                    component={motion.div}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    container
                    spacing={3}
                    className="tools"
                    sx={{ p: 1 }}
                  >
                    {/* <motion.img variants={staggerItem} src={ImageAssets.premierePro} alt="Adobe Premiere Pro" /> */}
                    <motion.img
                      variants={staggerItem}
                      src={ImageAssets.afterEffects}
                      alt="Adobe After Effects"
                    />
                    <motion.img
                      variants={staggerItem}
                      src={ImageAssets.davinciResolve}
                      alt="DaVinci Resolve"
                    />
                    <motion.img
                      variants={staggerItem}
                      src={ImageAssets.illustrator}
                      alt="Adobe Illustrator"
                    />
                  </Grid>
                </Grid>

                {/* Right: video skills */}
                <Grid
                  component={motion.div}
                  variants={fadeInRight}
                  size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                  sx={{ p: 1 }}
                >
                  <SkillGroup
                    icon={<MovieOutlinedIcon />}
                    title="Video Editing"
                    skills={videoEditingSkills}
                  />
                  <SkillGroup
                    icon={<MenuBookOutlinedIcon />}
                    title="Storytelling"
                    skills={storytellingSkills}
                  />
                  <SkillGroup
                    icon={<AutoFixHighOutlinedIcon />}
                    title="Motion Design"
                    skills={motionSkills}
                  />
                  <SkillGroup
                    icon={<RecordVoiceOverOutlinedIcon />}
                    title="Audio"
                    skills={audioSkills}
                  />
                  <SkillGroup
                    icon={<PaletteOutlinedIcon />}
                    title="Color"
                    skills={colorSkills}
                  />
                  <SkillGroup
                    icon={<SmartToyOutlinedIcon />}
                    title="AI Video Creation"
                    skills={aiVideoSkills}
                  />
                </Grid>
              </Grid>
            </motion.div>
          )}
        </AnimatePresence>
      </Stack>
      {/* ABOUT */}

      <Divider sx={{ my: 2, borderColor: "#F5F6F6" }}></Divider>

      {/* Work Experience */}
      <Stack spacing={{ xs: 1 }}>
        <Typography
          component={motion.h6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          variant="h6"
          className={classes.subsectiontitle}
        >
          Work Experience
        </Typography>
        <WorkExperience />
      </Stack>
      {/* Work Experience */}
    </Box>
  );
}
