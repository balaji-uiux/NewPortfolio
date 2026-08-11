import { Stack } from "@mui/material";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
/**MUI Components */
import { siteStyles } from "../style/style";
/**JSS */

export default function PageUp() {
  const classes = siteStyles();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Stack
      onClick={handleScrollToTop}
      className={classes.pageup}
      sx={{
        justifyContent: "end",
        cursor: "pointer",
        bottom: { xs: "24px !important" },
        right: { xs: "24px !important" },
      }}
    >
      <NorthRoundedIcon />
    </Stack>
  );
}
