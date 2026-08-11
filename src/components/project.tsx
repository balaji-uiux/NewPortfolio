import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import SchemaOutlinedIcon from "@mui/icons-material/SchemaOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
/**My Components */
import { motion } from "motion/react";
/**Framer Motion */
import { ImageAssets } from "../assets/imageAssets/image";
/**Images */
import { siteStyles } from "../style/style";
/**JSS */
import Tools from "../components/tools";
/**Components */
import { staggerContainer, staggerItem } from "../utils/animationVariants";
/**Animation Variants */

export default function ProjectOverview() {
  const classes = siteStyles();
  // Example projects array; replace with your actual data
  const projects = [
    {
      name: "TRAFCY",
      description:
        '"Tacky Remedy uses playful, attention-grabbing methods to change littering habits, making trash disposal more engaging and promoting cleaner public spaces."',
      link: "https://www.behance.net/gallery/159526711/Trafcy-UX-case-study",
      image: ImageAssets.trafcy,
      type: "UX Case Study",
      typeicon: <SchemaOutlinedIcon />,
      tools: [
        { toolname: "Figma", logo: ImageAssets.figma },
        { toolname: "Adobe Illustrator", logo: ImageAssets.illustrator },
        { toolname: "Adobe XD", logo: ImageAssets.XD },
      ],
    },
    {
      name: "MEMODIC",
      description:
        '"Memodic is a vocabulary learning tool that uses spaced repetition and a clean interface to help users memorize new words and track their progress easily."',
      link: "https://www.behance.net/gallery/159567743/Memodic",
      image: ImageAssets.memodic,
      type: "UX Case Study",
      typeicon: <SchemaOutlinedIcon />,
      tools: [
        { toolname: "Figma", logo: ImageAssets.figma },
        { toolname: "Adobe Illustrator", logo: ImageAssets.illustrator },
      ],
    },
    // UX Case Studies
    {
      name: "STAMP",
      description:
        '"This project streamlines postal mail by letting users compose messages through a digital stamp and block unwanted mail, enhancing convenience and control."',
      link: "https://www.behance.net/gallery/159621695/STAMP",
      image: ImageAssets.stamp,
      type: "UI Design",
      typeicon: <DesignServicesOutlinedIcon />,
      tools: [
        { toolname: "Figma", logo: ImageAssets.figma },
        { toolname: "Adobe Illustrator", logo: ImageAssets.illustrator },
        { toolname: "Adobe XD", logo: ImageAssets.XD },
      ],
    },
    {
      name: "TRADE HIGH",
      description:
        '"TradeHigh is a clean, intuitive dashboard design for a trading platform, simplifying complex financial data with a visually engaging interface."',
      link: "https://www.behance.net/gallery/224582899/TradeHigh",
      image: ImageAssets.tradehigh,
      type: "UI Design",
      typeicon: <DesignServicesOutlinedIcon />,
      tools: [{ toolname: "Figma", logo: ImageAssets.figma }],
    },
    {
      name: "MANATEQ WEBSITE",
      description:
        '"Manateq Logistics Website is a responsive B2B platform crafted to simplify complex logistics services for businesses."',
      link: "https://www.behance.net/gallery/220909517/Logistics-website",
      image: ImageAssets.manateq,
      type: "UI Design",
      typeicon: <DesignServicesOutlinedIcon />,
      tools: [{ toolname: "Figma", logo: ImageAssets.figma }],
    },
    {
      name: "POWMACH",
      description:
        '"POWMACH is a real-time dashboard that helps factories monitor energy usage across machines with a clean, data-driven interface to boost efficiency and cut waste."',
      link: "https://www.behance.net/gallery/224681813/POWMACH",
      image: ImageAssets.powmach,
      type: "UI Design",
      typeicon: <DesignServicesOutlinedIcon />,
      tools: [
        { toolname: "Figma", logo: ImageAssets.figma },
        { toolname: "Adobe Illustrator", logo: ImageAssets.illustrator },
      ],
    },
    // UI Designs
  ];

  return (
    <>
      <Box className={classes.project}>
        <Grid
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          container
        >
          {projects.map((project, index) => (
            <Grid
              component={motion.div}
              variants={staggerItem}
              sx={{ p: 2, mb: 3 }}
              size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
              key={index}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Grid container className="thumbnail">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    src={project.image}
                    alt=""
                  />
                </Grid>
                <Grid className="content">
                  <Grid
                    container
                    className="title"
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant={"h6"}
                      className="name"
                      sx={{
                        p: 1,
                        border: "1px solid #9747FF",
                      }}
                    >
                      {project.name}
                      <span className="topleft"></span>
                      <span className="bottomleft"></span>
                      <span className="topright"></span>
                      <span className="bottomright"></span>
                    </Typography>
                    <Grid
                      container
                      className="type"
                      sx={{ p: 1, alignItems: "center", gap: 1 }}
                    >
                      {project.typeicon}
                      {project.type}
                    </Grid>
                  </Grid>
                  <Typography variant={"body1"} className="overview">
                    {project.description}
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    divider={<Divider orientation="vertical" flexItem />}
                    sx={{
                      flexDirection: { xs: "column", sm: "row" },
                      gap: { xs: 1, sm: 2 },
                      mb: 2,
                    }}
                  >
                    {project.tools.map((tool, idx) => (
                      <Tools
                        key={idx}
                        toolname={tool.toolname}
                        logo={tool.logo}
                      />
                    ))}
                  </Stack>
                  <Grid
                    container
                    sx={{ justifyContent: { xs: "center", sm: "end" } }}
                  >
                    <Link
                      href={project.link}
                      underline="none"
                      target="_blank"
                      sx={{ width: { xs: "100%", sm: "auto" } }}
                    >
                      <Button
                        component={motion.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variant="text"
                        className={classes.button}
                        endIcon={<OpenInNewRoundedIcon />}
                        sx={{ width: { xs: "100%", sm: "auto" } }}
                      >
                        View Project
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
