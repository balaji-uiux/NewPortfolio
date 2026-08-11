import { Grid, Typography } from "@mui/material";
/**My Components */
import { siteStyles } from "../style/style";
/**JSS */

type ToolsProps = {
    toolname: string;
    logo: string;
};

export default function Tools({ toolname, logo }: ToolsProps) {
  const classes = siteStyles();
  return (
    <Grid container className={classes.tools} sx={ { alignItems: "center", gap: 1 } }>
      <img src={logo} alt="" />
      <Typography variant="h6">{toolname}</Typography>
    </Grid>
  );
}
