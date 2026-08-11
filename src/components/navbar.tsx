import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { motion } from "motion/react";
/**Framer Motion */
import { siteStyles } from "../style/style";
import { ImageAssets } from "../assets/imageAssets/image";
import { navbarVariant } from "../utils/animationVariants";
/**Animation Variants */
import resumePDF from "../assets/Resume/Balaji_UIUX_Designer_Resume.pdf";

interface Props {
  window?: () => Window;
}

const drawerWidth = "100%";
const navItems = ["About", "Projects", "Resume"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = siteStyles();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false); // Close drawer on mobile
    }
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() =>
                item === "Resume"
                  ? globalThis.open(resumePDF, "_blank", "noopener,noreferrer")
                  : handleNavClick(item)
              }
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component={motion.nav}
        initial="hidden"
        animate="visible"
        variants={navbarVariant}
        className={classes.navBar}
        sx={{ padding: { xs: "16px", sm: "24px", md: "12px 100px" } }}
      >
        <Toolbar
          sx={{
            minHeight: "fit-content !important",
            justifyContent: "space-between",
            p: 0,
          }}
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            src={ImageAssets.logo}
            className={classes.logo}
            alt="logo"
            onClick={() => handleNavClick("hero")} // optional: scroll to Work
            style={{ cursor: "pointer" }}
          />
          <Box sx={{ display: { xs: "block", sm: "flex" }, gap: "20px" }}>
            {navItems.map((item) => (
              <Button
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={item}
                className={classes.name}
                onClick={() =>
                  item === "Resume"
                    ? globalThis.open(resumePDF, "_blank", "noopener,noreferrer")
                    : handleNavClick(item)
                }
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "none", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
