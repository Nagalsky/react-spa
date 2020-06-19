import { theme } from "@chakra-ui/core";
import customIcons from "../assets/icons";
import "../assets/fonts/MuseoModerno/stylesheet.css";

const customTheme = theme;

// Breakpoints
customTheme.breakpoints = ["540px", "768px", "992px", "1200px", "1600px", "1800px"];
// aliases
/* eslint-disable prefer-destructuring */
customTheme.breakpoints.sm = customTheme.breakpoints[0];
customTheme.breakpoints.md = customTheme.breakpoints[1];
customTheme.breakpoints.lg = customTheme.breakpoints[2];
customTheme.breakpoints.xl = customTheme.breakpoints[3];
customTheme.breakpoints.xxl = customTheme.breakpoints[4];
customTheme.breakpoints.xxxl = customTheme.breakpoints[5];

// Font sizes
customTheme.fontSizes = {
  xs: "14px",
  sm: "16px",
  md: "20px",
  lg: "22px",
  xl: "26px",
  xxl: "30px",
  "3xl": "28px",
  "4xl": "36px",
  "5xl": "48px",
  "6xl": "64px"
};

// Container
customTheme.sizes.containers = {
  "screen-xs": "100%",
  "screen-sm": "100%",
  "screen-md": "740px",
  "screen-lg": "970px",
  "screen-xl": "1060px",
  "screen-xxl": "1480px"
};

// Fonts
const primaryFonts = {
  light: "MuseoModerno-Light",
  regular: "MuseoModerno-Regular",
  bold: "MuseoModerno-Bold"
};

customTheme.fonts = {
  baseLight: primaryFonts.light,
  baseRegular: primaryFonts.regular,
  baseBold: primaryFonts.bold,
  body: primaryFonts.regular,
  heading: primaryFonts.bold
};

// Line-heights
customTheme.lineHeights = {
  ...theme.lineHeights,
  body: 1.5,
  heading: 1.25
};

// Colors
customTheme.colors = {
  ...theme.colors,
  black: "#2c323a",
  white: "#fff",
  primary: {
    50: "#dbf9d7",
    100: "#b8f6ca",
    200: "#8fefa9",
    300: "#63c56c",
    400: "#39e268",
    500: "#16993b",
    600: "#0b6d3b",
    700: "#0c6f2a",
    800: "#034318",
    900: "#044a32"
  },
  success: {
    50: "#dbfce7",
    100: "#b9f3e5",
    200: "#93e9d4",
    300: "#90e9c3",
    400: "#43d5b2",
    500: "#4ad7b5",
    600: "#239a96",
    700: "#0e6855",
    800: "#004032",
    900: "#0d5967"
  },
  danger: {
    50: "#ffe2da",
    100: "#fcb8c0",
    200: "#f48c97",
    300: "#ff9992",
    400: "#e73145",
    500: "#e94254",
    600: "#b72450",
    700: "#730917",
    800: "#48030d",
    900: "#7a0e42"
  },
  info: {
    50: "#dcdffe",
    100: "#b6bbff",
    200: "#858ef9",
    300: "#979dfd",
    400: "#2834f2",
    500: "#505bf5",
    600: "#272eb0",
    700: "#050e7a",
    800: "#01084b",
    900: "#0e1275"
  },
  warning: {
    50: "#fff8ca",
    100: "#ffeead",
    200: "#ffe37d",
    300: "#fce365",
    400: "#ffcd1a",
    500: "#f7c100",
    600: "#b18200",
    700: "#806400",
    800: "#4e3c00",
    900: "#765100"
  },
  natural: {
    50: "#fafafa",
    100: "#f1f3f7",
    200: "#c1c7d2",
    300: "#78808d",
    400: "#47505e",
    500: "#f4f5f9",
    600: "#222222"
  }
};

// Shadows
customTheme.shadows = {
  xs: "0px 1px 4px rgba(25, 36, 54, 0.08)",
  sm: "1px 4px 8px rgba(25, 36, 54, 0.08)",
  md: "2px 6px 16px rgba(25, 36, 54, 0.1)",
  lg: "4px 10px 24px rgba(25, 36, 54, 0.1)",
  xl: "6px 8px 32px rgba(25, 36, 54, 0.14)",
  xxl: "8px 16px 40px rgba(25, 36, 54, 0.14)"
};

// Radius
customTheme.radii = {
  none: "0",
  sm: "5px",
  md: "0.25rem",
  lg: "9px",
  xl: "19px",
  xxl: "29px",
  xxxl: "48px",
  full: "9999px"
};

// Icons
customTheme.icons = {
  ...theme.icons,
  ...customIcons
};

export default customTheme;
