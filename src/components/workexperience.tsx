/**MUI Components */
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
/**JSS */
import { siteStyles } from "../style/style";
/**CSS(Responsive Design)  */
import "../App.css";

export default function WorkExperience() {
  const classes = siteStyles();
  const experience = [
    {
      tenure: "Feb 2023 - Present",
      company: "Third Eye Info Technology",
      role: "UI/UX Designer",
      responsibilities: [
        "Designed intuitive UI/UX solutions with wireframes, prototypes, and responsive layouts.",
        "Conducted research to improve navigation, accessibility, and usability.",
        "Built scalable UI components, maintained design systems, and collaborated with developers for seamless implementation.",
      ],
    },
    /**Third Eye Info Tech */
    {
      tenure: "May 2022 - Dec 2023",
      company: "UX Mint",
      role: "UI/UX Internship",
      responsibilities: [
        "Conducted user research and usability testing to gather insights and refine designs.",
        "Created and maintained design systems for consistency, ensuring responsive and accessible designs across devices.",
        "Utilized tools like Figma, Adobe XD, and Illustrator while staying updated with design trends.",
      ],
    },
    /**UX Mint */
    {
      tenure: "Jan 2021 - Apr 2022",
      company: "HDFC Bank",
      role: "Customer Support Executive",
      responsibilities: [
        "Handling inbound and outbound calls to assist customers with banking queries, account information, and transaction-related issues.",
        "Providing accurate information about HDFC Bank's products, services, and policies.",
        "Resolving customer complaints promptly while adhering to bank policies and guidelines.",
      ],
    },
    /**UX Mint */
  ];
  /**Experiences over the years! */

  return (
    <Stack
      direction={{
        xs: "column",
        sm: "column",
        md: "column",
        lg: "column",
        xl: "row",
      }}
      spacing={{ xs: 1, sm: 0 }}
      divider={<Divider orientation="vertical" flexItem />}
    >
      {experience.map((exp, index) => (
        <Box key={index}>
          <Grid
            container
            sx={{ pt: 1, px: 1, alignItems: "center", gap: 1 }}
            className={classes.duration}
          >
            <Grid container>
              <CalendarMonthOutlinedIcon className="icon" />
            </Grid>
            <Grid>
              <Typography variant="subtitle1" className="period">
                {exp.tenure}
              </Typography>
            </Grid>
          </Grid>
          {/* work_duration */}

          <Grid className={classes.company} sx={{ p: 1 }}>
            <Grid
              container
              sx={{
                alignItems: { xs: "baseline", sm: "baseline", md: "center" },
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "column", md: "row" },
              }}
            >
              <Grid
                container
                sx={{ alignItems: "center", justifyContent: "center", gap: 1 }}
                className="companyname"
              >
                <BusinessCenterOutlinedIcon className="icon" />
                <Typography variant="subtitle1" className="name">
                  {exp.company}
                </Typography>
              </Grid>
              <Grid className="jobrole" sx={{ px: "16px", py: "12px" }}>
                <Typography variant="h5" className="name">
                  {exp.role}
                </Typography>
                <span className="top"></span>
                <span className="bottom"></span>
                <span className="right"></span>
                <span className="left"></span>
              </Grid>
            </Grid>
            {/* company_name */}
            <Grid className="responsibilities">
              <ul>
                {exp.responsibilities.map((obligations, i) => (
                  <li key={i}>{obligations}</li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Stack>
  );
}
