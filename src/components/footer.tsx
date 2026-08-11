import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Divider from "@mui/material/Divider";
/**My Components */
import { motion } from "motion/react";
/**Framer Motion */
import { siteStyles } from "../style/style";
/**JSS */
import { fadeInUp } from "../utils/animationVariants";
/**Animation Variants */

export default function Footer() {
  const classes = siteStyles();
  const currentYear = new Date().getFullYear();
  return (
    <Box
      sx={{
        padding: { xs: "16px", sm: "40px", md: "40px 100px", lg: "80px 100px" },
        backgroundColor: "#F9FAFA",
      }}
    >
      <Stack
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        direction="row"
        className="footer"
        sx={{ justifyContent: "space-between", flexWrap: "wrap" }}
      >
        <Grid container className="contact-medium" sx={{ p: 1, gap: 2 }}>
          <Grid
            container
            className={classes.contact}
            sx={{ alignItems: "center", gap: 1 }}
          >
            <Link
              component={motion.a}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
              href="tel:9791618920"
              underline="hover"
            >
              <CallIcon className="icon" />
              +91 9791618920
            </Link>
          </Grid>
          <Divider
            sx={{
              border: "1px solid #E5E7E8",
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
          />
          <Grid
            container
            className={classes.contact}
            sx={{ alignItems: "center", gap: 1 }}
          >
            <Link
              component={motion.a}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
              href="mailto:balajiramesh59@gmail.com"
              underline="hover"
              target="_blank"
            >
              <EmailIcon className="icon" />
              balajiramesh59@gmail.com
            </Link>
          </Grid>
          <Divider
            sx={{
              border: "1px solid #E5E7E8",
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
          />
          <Grid
            container
            className={classes.contact}
            sx={{ alignItems: "center", gap: 1 }}
          >
            <Link
              component={motion.a}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
              href="https://www.linkedin.com/in/balaji-ramesh-0478bb1ba/"
              underline="hover"
              target="_blank"
            >
              <LinkedInIcon className="icon" />
              linkedin.com/in/balaji-ramesh
            </Link>
          </Grid>
        </Grid>

        <Grid container sx={{ p: 1, alignItems: "center", gap: 1 }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              color: "#414449",
              fontFamily: "var(--OpenSansItalic)",
            }}
          >
            Designed by BALAJI
          </Typography>
          <span>•</span>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              color: "#414449",
              fontFamily: "var(--OpenSansItalic)",
            }}
          >
            Copyrights {currentYear}
          </Typography>
        </Grid>
      </Stack>
    </Box>
  );
}
