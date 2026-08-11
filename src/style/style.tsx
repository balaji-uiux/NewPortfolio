import { createUseStyles } from "react-jss";

import PopLightItalic from "../assets/fonts/Poppins-LightItalic.ttf";
import PopItalic from "../assets/fonts/Poppins-Italic.ttf";
import PopRegular from "../assets/fonts/Poppins-Regular.ttf";
import PopMedium from "../assets/fonts/Poppins-Medium.ttf";
import OpenSansItalic from "../assets/fonts/OpenSans-Italic.ttf";
import OpenSansMedItalic from "../assets/fonts/OpenSans-MediumItalic.ttf";
import OpenSansLight from "../assets/fonts/OpenSans-Light.ttf";
import OpenSansReg from "../assets/fonts/OpenSans-Regular.ttf";
import OpenSansMed from "../assets/fonts/OpenSans-Medium.ttf";

export const siteStyles = createUseStyles({
  "@global": {
    "@font-face": [
      {
        fontFamily: "PopRegular",
        src: `url(${PopRegular}) format('truetype')`,
        fontWeight: 400,
        fontStyle: "normal",
      },
      {
        fontFamily: "PopMedium",
        src: `url(${PopMedium}) format('truetype')`,
        fontWeight: 500,
        fontStyle: "normal",
      },
      {
        fontFamily: "PopItalic",
        src: `url(${PopItalic}) format('truetype')`,
        fontWeight: 400,
        fontStyle: "italic",
      },
      {
        fontFamily: "PopLightItalic",
        src: `url(${PopLightItalic}) format('truetype')`,
        fontWeight: 300,
        fontStyle: "italic",
      },
      {
        fontFamily: "OpenSansLight",
        src: `url(${OpenSansLight}) format('truetype')`,
        fontWeight: 300,
        fontStyle: "normal",
      },
      {
        fontFamily: "OpenSansReg",
        src: `url(${OpenSansReg}) format('truetype')`,
        fontWeight: 400,
        fontStyle: "normal",
      },
      {
        fontFamily: "OpenSansMed",
        src: `url(${OpenSansMed}) format('truetype')`,
        fontWeight: 500,
        fontStyle: "normal",
      },
      {
        fontFamily: "OpenSansItalic",
        src: `url(${OpenSansItalic}) format('truetype')`,
        fontWeight: 400,
        fontStyle: "italic",
      },
      {
        fontFamily: "OpenSansMedItalic",
        src: `url(${OpenSansMedItalic}) format('truetype')`,
        fontWeight: 500,
        fontStyle: "italic",
      },
    ],
    ":root": {
      "--PopRegular": "PopRegular",
      "--PopMedium": "PopMedium",
      "--PopItalic": "PopItalic",
      "--PopLightItalic": "PopLightItalic",
      "--OpenSansLight": "OpenSansLight",
      "--OpenSansReg": "OpenSansReg",
      "--OpenSansMed": "OpenSansMed",
      "--OpenSansItalic": "OpenSansItalic",
      "--OpenSansMedItalic": "OpenSansMedItalic",
    },
  },
  /**Font and Root */

  homepage: {
    position: "relative",
  },
  ellipsebackground: {
    "& span": {
      borderRadius: "50%",
      position: "absolute",
    },
    "& .ellipse-large": {
      width: "720px",
      height: "720px",
      backgroundColor: "#FFF8EB",
      zIndex: 0,
      top: "96px",
      right: "376px",
    },
    "& .ellipse-small": {
      width: "240px",
      height: "240px",
      backgroundColor: "#FFEFD6",
      zIndex: 0,
      top: "824px",
      left: "424px",
    },
  },
  navBar: {
    backgroundColor: "#FFF",
    border: "0.5px solid rgba(12, 142, 255, 0.16)",
    boxShadow: "none",
  },
  logo: {
    width: "56px",
    height: "auto",
  },
  herosection: {
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    backdropFilter: "blur(10px)",
  },
  name: {
    color: "#565C64",
    fontFamily: "var(--OpenSansMed)",
    textTransform: "none",
    fontSize: "16px",
  },
  textcontent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& .title": {
      fontSize: "56px",
      color: "#3A3C3F",
      marginBottom: "16px",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "8px",
      "& .greetings": {
        fontFamily: "var(--PopLightItalic)",
      },
      "& .name": {
        fontFamily: "var(--PopItalic)",
        fontSize: "64px",
        color: "#17181A",
      },
    },
    "& .subtitle": {
      position: "relative",
      border: "1px solid #0C8EFF",
      padding: "4px",
      "& .profileDesc": {
        fontFamily: "var(--OpenSansLight)",
        position: "relative",
        border: "none",
        backgroundColor: "transparent",
        "& span": {
          width: "auto",
          position: "relative",
          border: "none",
          backgroundColor: "transparent",
          height: "auto",
        },
      },
      "& span": {
        position: "absolute",
        width: "8px",
        height: "8px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #0C8EFF",
      },
      "& .topleft": {
        left: "-4px",
        top: "-4px",
      },
      "& .bottomleft": {
        left: "-4px",
        bottom: "-4px",
      },
      "& .topright": {
        right: "-4px",
        top: "-4px",
      },
      "& .bottomright": {
        right: "-4px",
        bottom: "-4px",
      },
    },
  },
  imagecontent: {
    "& .aboutme": {
      fontFamily: "var(--OpenSansItalic)",
      color: "#656D75",
      padding: "8px",
    },
    "& img": {
      width: "100%",
      borderRadius: "16px",
    },
    padding: "8px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 16px rgba(12, 142, 255, 0.16)",
    borderRadius: "24px",
  },
  /**Hero Section */

  /**PageUp */
  pageup: {
    position: "fixed",
    bottom: "48px",
    right: "48px",
    padding: "16px",
    backgroundColor: "#4172FA",
    color: "#FFFFFF",
    borderRadius: "50%",
    zIndex: "1",
    "& svg": {
      transition: "transform 0.3s ease",
    },
    "&:hover svg": {
      transform: "translateY(-2px)",
    },
  },
  /**PageUp */

  /**Work/About & Experience */
  /**About */
  sectiontitle: {
    fontFamily: "var(--PopMedium)",
    fontSize: "32px",
    lineHeight: "50px",
    color: "#3A3C3F",
  },
  subsectiontitle: {
    fontFamily: "var(--PopMedium)",
    fontSize: "24px",
    lineHeight: "38px",
    color: "#3A3C3F",
  },
  aboutcontent: {
    "& .aboutme": {
      fontFamily: "var(--OpenSansItalic)",
      color: "#414449",
      fontSize: "18px",
      lineHeight: "30px",
    },
    "& .skilltitle": {
      fontFamily: "var(--PopRegular)",
      fontSize: "18px",
      lineHeight: "30px",
      color: "#17181A",
    },
    "& .skillset": {
      flexWrap: "wrap",
      padding: "8px",
      "& p": {
        margin: "0px",
        fontFamily: "var(--OpenSansReg)",
        fontSize: "16px",
        lineHeight: "24px",
        color: "#3A3C3F",
      },
    },
    "& .tools": {
      "& img": {
        width: "40px",
      },
    },
  },
  /**About */
  /**Experience */
  duration: {
    "& .period": {
      fontFamily: "var(--OpenSansReg)",
      color: "#3A3C3F",
      fontSize: "18px",
      lineHeight: "28px",
    },
    "& .icon": {
      color: "#414449",
      fontSize: "24px",
    },
  },
  company: {
    marginTop: "0px !important",
    "& .companyname": {
      "& .name": {
        fontFamily: "var(--OpenSansReg)",
        color: "#3A3C3F",
        fontSize: "18px",
        lineHeight: "28px",
      },
      "& .icon": {
        color: "#3A3C3F",
        fontSize: "24px",
      },
    },
    "& .jobrole": {
      position: "relative",
      "& .name": {
        fontFamily: "var(--PopMedium)",
        fontSize: "22px",
        lineHeight: "34px",
        color: "#17181A",
      },
      "& span": {
        backgroundColor: "#4172FA",
        position: "absolute",
      },
      "& .left": {
        top: "8px",
        bottom: "8px",
        left: "10px",
        width: "1px",
        height: "auto",
      },
      "& .right": {
        top: "8px",
        bottom: "8px",
        right: "10px",
        width: "1px",
        height: "auto",
      },
      "& .top": {
        top: "10px",
        right: "8px",
        left: "8px",
        width: "auto",
        height: "1px",
      },
      "& .bottom": {
        bottom: "10px",
        right: "8px",
        left: "8px",
        width: "auto",
        height: "1px",
      },
    },
    "& .seperator": {
      borderColor: "#E5E7E8",
    },
    "& .responsibilities": {
      color: "#414449",
      fontFamily: "var(--OpenSansReg)",
      fontSize: "16px",
      lineHeight: "28px",
    },
  },
  /**Experience */
  /**Work/About & Experience */

  /**Projects */
  /**Project card */
  project: {
    "& .thumbnail": {
      border: "1px solid #F5F6F6",
      borderRadius: "16px",
      overflow: "hidden",
      marginBottom: "24px",
      "& img": {
        height: "360px",
        width: "100%",
        objectFit: "cover",
      },
    },
    "& .name": {
      width: "fit-content",
      color: "#3A3C3F",
      fontFamily: "var(--PopMedium)",
      fontSize: "32px",
      lineHeight: "50px",
      position: "relative",
      "& span": {
        position: "absolute",
        backgroundColor: "#FFFFFF",
        border: "1px solid #9747FF",
        width: "8px",
        height: "8px",
      },
      "& .topleft": {
        left: "-4px",
        top: "-4px",
      },
      "& .bottomleft": {
        left: "-4px",
        bottom: "-4px",
      },
      "& .topright": {
        right: "-4px",
        top: "-4px",
      },
      "& .bottomright": {
        right: "-4px",
        bottom: "-4px",
      },
    },
    "& .type": {
      color: "#0C8EFF",
      backgroundColor: "#ECF6FF",
      borderRight: "1px solid #0C8EFF",
      fontSize: "20px",
      lineHeight: "32px",
      fontFamily: "var(--PopRegular)",
    },
    "& .overview": {
      fontSize: "20px",
      lineHeight: "32px",
      fontFamily: "var(--OpenSansItalic)",
      color: "#565C64",
      textAlign: "center",
      marginBottom: "16px",
    },
  },
  tools: {
    fontFamily: "var(--OpenSansRegular)",
    fontSize: "24px",
    lineHeight: "38px",
    color: "#414449",
    "& img": {
      width: "40px",
      height: "40px",
    },
  },
  button: {
    textTransform: "none",
    fontFamily: "var(--OpenSansMedium)",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#214AEF",
    backgroundColor: "#F5F8FF",
    padding: "10px 16px",
    borderRadius: "12px",
    border: "1px solid transparent",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease",
    "&::before": {
      content: '""',
      width: "6px",
      height: "6px",
      background: "#2F61EB",
      borderRadius: "50%",
      position: "absolute",
      left: "-10px",
      top: "50%",
      transform: "translate(-50%, -50%)",
      transition: "left 0.3s ease",
    },
    "&:hover": {
      borderColor: "#2F61EB",
      "&::before": {
        left: "6px",
      },
    },
    "&:active": {
      color: "#FFFFFF",
      backgroundColor: "#2F61EB",
      "&::before": {
        left: "50%",
        width: "360px",
        height: "80px",
        zIndex: "-1",
      },
    },
  },
  /**Project card */
  /**Projects */

  /**Footer */
  contact: {
    padding: "8px",
    fontFamily: "var(--PopRegular)",
    fontSize: "16px",
    lineHeight: "24px",
    "& .icon": {
      color: "#3A3C3F",
    },
    "& a": {
      color: "#3A3C3F",
    },
  },
  /**Footer */

  /**Video Player */
  videoPlayerRoot: {
    borderRadius: "20px",
    overflow: "hidden",
    border: "1px solid #E5E7E8",
    boxShadow: "0 8px 40px rgba(12, 142, 255, 0.10)",
    backgroundColor: "#FFFFFF",
    "& .video-player-screen": {
      position: "relative",
      backgroundColor: "#0d0d0d",
    },
    "& .video-player-controls": {
      padding: "20px 24px 16px",
      backgroundColor: "#FFFFFF",
    },
    "& .vp-title": {
      fontFamily: "var(--PopMedium)",
      fontSize: "22px",
      lineHeight: "34px",
      color: "#17181A",
      marginBottom: "2px",
    },
    "& .vp-category": {
      fontFamily: "var(--OpenSansMed)",
      fontSize: "13px",
      lineHeight: "20px",
      color: "#0C8EFF",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      marginBottom: "8px",
    },
    "& .vp-description": {
      fontFamily: "var(--OpenSansReg)",
      fontSize: "15px",
      lineHeight: "24px",
      color: "#565C64",
    },
    "& .vp-tool-badge": {
      fontFamily: "var(--OpenSansMed)",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#414449",
      backgroundColor: "#F5F6F6",
      border: "1px solid #E5E7E8",
      borderRadius: "6px",
      padding: "3px 10px",
    },
    "& .vp-ctrl-btn": {
      color: "#3A3C3F",
      backgroundColor: "#F5F6F6",
      borderRadius: "12px",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "#E5E7E8",
        color: "#17181A",
      },
      "&:focus-visible": {
        outline: "2px solid #0C8EFF",
        outlineOffset: "2px",
      },
    },
    "& .vp-ctrl-play": {
      color: "#FFFFFF",
      backgroundColor: "#0C8EFF",
      width: "52px",
      height: "52px",
      "&:hover": {
        backgroundColor: "#0A7FE0",
        color: "#FFFFFF",
      },
    },
    "& .vp-buttons": {
      paddingTop: "12px",
      borderTop: "1px solid #F5F6F6",
    },
  },
  /**Video Player */

  /**Video Stats Card */
  videoStatCard: {
    textAlign: "center",
    padding: "16px 12px",
    backgroundColor: "#F9FAFA",
    borderRadius: "14px",
    border: "1px solid #E5E7E8",
    "& .video-stat-value": {
      fontFamily: "var(--PopMedium)",
      fontSize: "28px",
      lineHeight: "40px",
      color: "#0C8EFF",
    },
    "& .video-stat-label": {
      fontFamily: "var(--OpenSansReg)",
      fontSize: "13px",
      lineHeight: "20px",
      color: "#565C64",
    },
  },
  /**Video Stats Card */
} as any);
