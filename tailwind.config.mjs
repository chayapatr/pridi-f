/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontSize: "1.05rem",
            color: colors.neutral[950],
            a: {
              // fontSize: '1.35rem',
              textDecoration: "none",
              color: colors.blue[500],
              fontWeight: 400,
              "&:hover": {
                // backgroundColor: colors.yellow[300],
                color: colors.blue[600],
              },
            },
            h1: {
              fontSize: "1.35rem",
              margin: "0 0 0.75rem 0",
              fontWeight: 500,
              lineHeight: "1.8rem",
              // textDecoration: "underline",
            },
            "* + h2": {
              margin: "2rem 0 0.75rem 0",
            },
            h2: {
              fontSize: "1.3rem",
              margin: "0 0 1rem 0",
              fontWeight: 500,
            },
            p: {
              marginBottom: "1.5rem",
              textAlign: "justify",
            },
            img: {
              margin: "1rem 0",
            },
            ul: {
              paddingLeft: "1rem",
              color: "#000",
              margin: "1rem 0",
            },
            "ul > li": {
              paddingLeft: "0",
              fontWeight: 400,
              margin: "0.2rem",
            },
            strong: {
              fontWeight: 500,
            },
            code: {
              fontFamily: "Recursive",
              color: colors.violet[600],
            },
            "pre > code": {
              fontFamily: "Recursive",
            },
            "blockquote > p": {
              textAlign: "left",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
