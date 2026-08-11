// Video project data for the Video Portfolio section
// Using explicit imports to handle special characters in filenames

import secretLock from "../assets/Videos/Secret Lock.mp4";
import tryAndBuy from "../assets/Videos/Try&Buy.mp4";
import walkInECom from "../assets/Videos/Walk-in E-Com.mp4";
import dongleHome from "../assets/Videos/[Dongle] Home.mp4";
import dongleOffice from "../assets/Videos/[Dongle] Office.mp4";
import fact1 from "../assets/Videos/[Fact 1] History of Lock.mp4";
import fact2 from "../assets/Videos/[Fact 2] Locks before Tech.mp4";
import fact3 from "../assets/Videos/[Fact 3] Big to Small.mp4";
import fact4 from "../assets/Videos/[Fact 4] Expensive Lock.mp4";

export interface VideoProject {
  title: string;
  video: string;
  category: string;
  description: string;
  tools: string[];
  series?: string;
  duration?: string;
}

export const videoProjects: VideoProject[] = [
  {
    title: "Secret Lock",
    video: secretLock,
    category: "Product Motion",
    description:
      "A cinematic product reveal for the Secret Lock concept — combining sleek motion design with purposeful visual storytelling to highlight form and security.",
    tools: ["Premiere Pro", "After Effects"],
    series: "Product Demos",
    duration: "00:45",
  },
  {
    title: "Try & Buy",
    video: tryAndBuy,
    category: "UX Motion Demo",
    description:
      "Motion-driven showcase of the Try & Buy e-commerce concept — communicating product interaction flows through kinetic visuals and clean transitions.",
    tools: ["Premiere Pro", "After Effects"],
    series: "Product Demos",
    duration: "00:52",
  },
  {
    title: "Walk-in E-Com",
    video: walkInECom,
    category: "UX Motion Demo",
    description:
      "A visual journey through the Walk-in E-Commerce experience — exploring how physical retail and digital interaction can seamlessly merge.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    series: "Product Demos",
    duration: "01:12",
  },
  {
    title: "Dongle — Home",
    video: dongleHome,
    category: "Motion Design",
    description:
      "Home environment showcase for the Dongle smart device. Emphasising ambient, lifestyle-driven storytelling and smooth motion transitions.",
    tools: ["After Effects", "Premiere Pro"],
    series: "Dongle Series",
    duration: "01:30",
  },
  {
    title: "Dongle — Office",
    video: dongleOffice,
    category: "Motion Design",
    description:
      "Office-context visual exploration of the Dongle device — professional, clean, and built around productivity-focused visual communication.",
    tools: ["After Effects", "Premiere Pro"],
    series: "Dongle Series",
    duration: "01:28",
  },
  {
    title: "History of the Lock",
    video: fact1,
    category: "Educational Motion",
    description:
      "Kinetic typography and motion graphics tracing the fascinating history of locks — blending research, narrative structure, and animated storytelling.",
    tools: ["After Effects", "DaVinci Resolve"],
    series: "Lock Facts Series",
    duration: "01:05",
  },
  {
    title: "Locks Before Technology",
    video: fact2,
    category: "Educational Motion",
    description:
      "A visual deep dive into mechanical locks before the digital era — told through motion graphics, typography animation, and cinematic pacing.",
    tools: ["After Effects", "DaVinci Resolve"],
    series: "Lock Facts Series",
    duration: "01:14",
  },
  {
    title: "Big to Small",
    video: fact3,
    category: "Educational Motion",
    description:
      "The evolution of lock design from industrial to miniature — a satisfying visual exploration using scale-driven motion and clean compositions.",
    tools: ["After Effects", "Premiere Pro", "DaVinci Resolve"],
    series: "Lock Facts Series",
    duration: "01:20",
  },
  {
    title: "The Most Expensive Lock",
    video: fact4,
    category: "Educational Motion",
    description:
      "An engaging motion story around the world's most expensive locks — high-impact visuals, precise editing, and strong audience retention pacing.",
    tools: ["After Effects", "Premiere Pro"],
    series: "Lock Facts Series",
    duration: "00:58",
  },
];
