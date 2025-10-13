import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import tailwindBootstrapGrid from "tailwind-bootstrap-grid";

const fontBase = 14;
const fontScale = 1.18;

const h6 = fontBase / fontBase;
const h5 = h6 * fontScale;
const h4 = h5 * fontScale;
const h3 = h4 * fontScale;
const h2 = h3 * fontScale;
const h1 = h2 * fontScale;

let fontPrimary = "Cormorant";
let fontPrimaryType = "serif";
let fontSecondary = "Inter";
let fontSecondaryType = "sans-serif";

fontPrimary = fontPrimary
  .replace(/\+/g, " ")
  .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");

fontSecondary = fontSecondary
  .replace(/\+/g, " ")
  .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");

const palette = {
  txt: {
    p: "#F7F0FF",
    s: "#D7C9FF",
    light: "#A89BE0",
  },
  bg: {
    p: "rgba(19, 13, 39, 0.85)",
    s: "rgba(38, 26, 69, 0.65)",
    t: "rgba(255, 255, 255, 0.12)",
  },
  border: "rgba(231, 222, 255, 0.35)",
  accent: "#C084FC",
  indigo: {
    glow: "#6C5CE7",
  },
  darkmode: {
    txt: {
      p: "#FDF8FF",
      s: "#E2D7FF",
      light: "#B5A9EC",
    },
    bg: {
      p: "rgba(10, 7, 24, 0.92)",
      s: "rgba(21, 16, 38, 0.75)",
      t: "rgba(255, 255, 255, 0.18)",
    },
    border: "rgba(196, 187, 255, 0.45)",
  },
};

const flatColors = {
  "txt-p": palette.txt.p,
  "txt-s": palette.txt.s,
  "txt-light": palette.txt.light,
  "bg-p": palette.bg.p,
  "bg-s": palette.bg.s,
  "bg-t": palette.bg.t,
  border: palette.border,
  accent: palette.accent,
  "indigo-glow": palette.indigo.glow,
  "darkmode-txt-p": palette.darkmode.txt.p,
  "darkmode-txt-s": palette.darkmode.txt.s,
  "darkmode-txt-light": palette.darkmode.txt.light,
  "darkmode-bg-p": palette.darkmode.bg.p,
  "darkmode-bg-s": palette.darkmode.bg.s,
  "darkmode-bg-t": palette.darkmode.bg.t,
  "darkmode-border": palette.darkmode.border,
};

const customUtilities = {
  ".font-primary": {
    fontFamily: `var(--font-heading), ${fontPrimary}, ${fontPrimaryType}`,
  },
  ".font-secondary": {
    fontFamily: `var(--font-body), ${fontSecondary}, ${fontSecondaryType}`,
  },
  ".text-h1": {
    fontSize: `${h1}rem`,
  },
  ".text-h1-sm": {
    fontSize: `${h1 * 0.8}rem`,
  },
  ".text-h2": {
    fontSize: `${h2}rem`,
  },
  ".text-h2-sm": {
    fontSize: `${h2 * 0.8}rem`,
  },
  ".text-h3": {
    fontSize: `${h3}rem`,
  },
  ".text-h3-sm": {
    fontSize: `${h3 * 0.8}rem`,
  },
  ".text-h4": {
    fontSize: `${h4}rem`,
  },
  ".text-h5": {
    fontSize: `${h5}rem`,
  },
  ".text-h6": {
    fontSize: `${h6}rem`,
  },
  ".text-txt-p": {
    color: palette.txt.p,
  },
  ".text-txt-s": {
    color: palette.txt.s,
  },
  ".text-txt-light": {
    color: palette.txt.light,
  },
  ".text-darkmode-txt-p": {
    color: palette.darkmode.txt.p,
  },
  ".text-darkmode-txt-s": {
    color: palette.darkmode.txt.s,
  },
  ".text-darkmode-txt-light": {
    color: palette.darkmode.txt.light,
  },
  ".bg-bg-t": {
    backgroundColor: palette.bg.t,
  },
  ".bg-bg-s": {
    backgroundColor: palette.bg.s,
  },
  ".bg-darkmode-bg-t": {
    backgroundColor: palette.darkmode.bg.t,
  },
  ".bg-darkmode-bg-s": {
    backgroundColor: palette.darkmode.bg.s,
  },
  ".border-border": {
    borderColor: palette.border,
  },
  ".border-darkmode-border": {
    borderColor: palette.darkmode.border,
  },
};

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        ...palette,
        ...flatColors,
      },
      minHeight: {
        static_sidemenu: "calc(100vh - 6rem)",
      },
      maxHeight: {
        static_sidemenu: "calc(100vh - 6rem)",
      },
      fontSize: {
        base: `${fontBase}px`,
        h1: `${h1}rem`,
        "h1-sm": `${h1 * 0.8}rem`,
        h2: `${h2}rem`,
        "h2-sm": `${h2 * 0.8}rem`,
        h3: `${h3}rem`,
        "h3-sm": `${h3 * 0.8}rem`,
        h4: `${h4}rem`,
        h5: `${h5}rem`,
        h6: `${h6}rem`,
      },
      fontFamily: {
        primary: ["var(--font-heading)", fontPrimary, fontPrimaryType],
        secondary: ["var(--font-body)", fontSecondary, fontSecondaryType],
      },
      spacing: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "9/16": "56.25%",
        112: "28rem",
      },
      animation: {
        // Intersect
        fade: "fadeIn 1000ms both",
        fadeUp: "fadeInUp 1000ms both",
        fadeDown: "fadeInDown 1000ms both",
        fadeRight: "fadeInRight 1000ms both",
        fadeLeft: "fadeInLeft 1000ms both",
        scale: "scaleOut 1000ms both",
        // Star Background
        twinkle: "twinkle 5s infinite ease-in-out",
        // Cycle Background
        cycleBg: "cycleBg 60s ease infinite",
      },
      keyframes: {
        // Intersect
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(2rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-2rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(-2rem)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(2rem)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        scaleOut: {
          "0%": { opacity: 0, transform: "scale(0.5)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        // Star Background
        twinkle: {
          "0%, 20%, 100%": { opacity: 1 },
          "10%": { opacity: 0.25 },
        },
        // Cycle Background
        cycleBg: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: theme("colors.txt.s"),
            a: {
              color: theme("colors.txt.s"),
              textDecoration: "underline",
              fontWeight: "inherit",
              "&:hover": {
                color: theme("colors.txt.p"),
              },
            },
            strong: {
              color: theme("colors.txt.p"),
            },
            h1: {
              color: theme("colors.txt.p"),
              marginBottom: "0.3em",
              marginTop: "0.6em",
            },
            h2: {
              color: theme("colors.txt.p"),
              marginBottom: "0.3em",
              marginTop: "0.6em",
            },
            h3: {
              color: theme("colors.txt.p"),
              marginBottom: "0.3em",
              marginTop: "0.6em",
            },
            h4: {
              color: theme("colors.txt.p"),
              marginBottom: "0.3em",
              marginTop: "0.6em",
            },
            h5: {
              color: theme("colors.txt.p"),
              marginBottom: "0.3em",
              marginTop: "0.6em",
            },
            h6: {
              color: theme("colors.txt.p"),
              marginBottom: "0.3em",
              marginTop: "0.6em",
            },
            blockquote: {
              borderColor: theme("colors.border"),
              borderLeftWidth: "8px",
              borderRadius: theme("borderRadius.lg"),
              paddingLeft: theme("spacing.4"),
              paddingRight: theme("spacing.4"),
              color: theme("colors.txt.s"),
              backgroundColor: theme("colors.bg.t"),
            },
            "blockquote p:first-of-type::before": {
              content: "none",
            },
            "blockquote p:last-of-type::after": {
              content: "none",
            },
            hr: {
              borderColor: theme("colors.border"),
            },
            img: {
              borderRadius: theme("borderRadius.lg"),
            },
            pre: {
              backgroundColor: theme("colors.bg.t"),
              borderRadius: theme("borderRadius.lg"),
              color: theme("colors.txt.p"),
            },
            code: {
              backgroundColor: theme("colors.bg.t"),
              borderRadius: theme("borderRadius.lg"),
              color: theme("colors.txt.p"),
              padding: "0 0.25rem",
            },
            "a code": {
              color: "inherit",
            },
            "th, td": {
              borderColor: theme("colors.border"),
            },
            table: {
              borderColor: theme("colors.border"),
            },
            "li::marker": {
              color: theme("colors.txt.s"),
            },
          },
        },
        invert: {
          css: {
            maxWidth: "none",
            color: theme("colors.darkmode.txt.s"),
            a: {
              color: theme("colors.darkmode.txt.s"),
              textDecoration: "underline",
              fontWeight: "inherit",
              "&:hover": {
                color: theme("colors.darkmode.txt.p"),
              },
            },
            strong: {
              color: theme("colors.darkmode.txt.p"),
            },
            h1: {
              color: theme("colors.darkmode.txt.p"),
              marginBottom: "0.3em",
              marginTop: "0.6em",
            },
            h2: {
              color: theme("colors.darkmode.txt.p"),
              marginBottom: "0.3em",
              marginTop: "0.6em",
            },
            h3: {
              color: theme("colors.darkmode.txt.p"),
              marginBottom: "0.3em",
              marginTop: "0.6em",
            },
            h4: {
              color: theme("colors.darkmode.txt.p"),
              marginBottom: "0.3em",
              marginTop: "0.6em",
            },
            h5: {
              color: theme("colors.darkmode.txt.p"),
              marginBottom: "0.3em",
              marginTop: "0.6em",
            },
            h6: {
              color: theme("colors.darkmode.txt.p"),
              marginBottom: "0.3em",
              marginTop: "0.6em",
            },
            blockquote: {
              borderColor: theme("colors.darkmode.border"),
              borderLeftWidth: "8px",
              borderRadius: theme("borderRadius.lg"),
              paddingLeft: theme("spacing.4"),
              paddingRight: theme("spacing.4"),
              color: theme("colors.darkmode.txt.s"),
              backgroundColor: theme("colors.darkmode.bg.t"),
            },
            "blockquote p:first-of-type::before": {
              content: "none",
            },
            "blockquote p:last-of-type::after": {
              content: "none",
            },
            hr: {
              borderColor: theme("colors.darkmode.border"),
            },
            pre: {
              backgroundColor: theme("colors.darkmode.bg.t"),
              borderRadius: theme("borderRadius.lg"),
              color: theme("colors.darkmode.txt.p"),
            },
            code: {
              backgroundColor: theme("colors.darkmode.bg.t"),
              borderRadius: theme("borderRadius.lg"),
              color: theme("colors.darkmode.txt.p"),
              padding: "0 0.25rem",
            },
            "a code": {
              color: "inherit",
            },
            "th, td": {
              borderColor: theme("colors.darkmode.border"),
            },
            table: {
              borderColor: theme("colors.darkmode.border"),
            },
            "li::marker": {
              color: theme("colors.darkmode.txt.s"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    typography,
    forms,
    tailwindBootstrapGrid({
      generate_container: false,
      grid_gutter_width: "2rem",
      grid_gutters: ["1", "0.25rem", "2", "0.5rem", "3", "1rem", "4", "1.5rem", "5", "3rem"],
    }),
    plugin(({ addVariant, addUtilities }) => {
      addVariant("intersect", "&:not([no-intersect])");
      addUtilities(customUtilities, {
        variants: ["responsive", "hover", "focus", "dark"],
      });
    }),
  ],
};

export default config;
