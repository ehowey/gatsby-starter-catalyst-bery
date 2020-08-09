import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"
import "fontsource-sen/400.css"
import "fontsource-sen/700.css"

export default merge(BaseTheme, {
  // Modifications to the base theme go here.
  breakpoints: ["480px", "768px", "1280px", "1440px"],
  fonts: {
    body:
      'Sen, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Sen, Georgia, serif",
    monospace: "Menlo, monospace",
  },
  colors: {
    ...tailwind.colors,
    background: baseColors.gray[1], //Try "#954264",
    text: baseColors.gray[8],
    textGray: "#6e6e6e",
    primary: "#257e86",
    secondary: "#464eae",
    link: "#464eae",
    accent: baseColors.blue[2],
    highlight: baseColors.blue[5],
    muted: baseColors.gray[2],
    header: {
      background: baseColors.gray[2],
      backgroundOpen: baseColors.blue[2],
      text: baseColors.gray[8],
      textOpen: baseColors.gray[8],
      icons: baseColors.gray[6],
      iconsOpen: baseColors.gray[8],
    },
    footer: {
      background: baseColors.gray[2],
      text: baseColors.gray[8],
      links: baseColors.gray[8],
      icons: baseColors.gray[8],
    },
    // You can delete dark mode by removing the "modes" object and setting useColorMode to false in gatsby-theme-catalyst-core
    modes: {
      dark: {
        background: baseColors.gray[9],
        text: baseColors.gray[1],
        textGray: "#9f9f9f",
        primary: "#28b49e",
        secondary: "#7c82ca",
        link: "#7c82ca",
        accent: baseColors.gray[8],
        highlight: baseColors.orange[5],
        muted: baseColors.gray[8],
        header: {
          text: baseColors.gray[1],
          textOpen: baseColors.gray[1],
          background: "#232946",
          backgroundOpen: baseColors.gray[8],
          icons: baseColors.gray[5],
          iconsOpen: baseColors.gray[1],
        },
        footer: {
          background: "#232946",
          text: baseColors.gray[1],
          links: baseColors.gray[1],
          icons: baseColors.gray[1],
        },
      },
    },
  },
  styles: {
    a: {
      color: "link",
      textDecoration: "underline",
      ":hover": {
        textDecoration: "none",
      },
    },
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 6,
      mt: 4,
      "::after": {
        display: "block",
        content: '""',
        width: "40px",
        pt: 2,
        borderBottomStyle: "solid",
        borderBottomWidth: "4px",
        borderBottomColor: "primary",
      },
    },
  },
  variants: {
    siteTitle: {
      fontSize: [3, 4, null, 5, null],
    },
  },
})
