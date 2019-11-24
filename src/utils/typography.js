import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  headerFontFamily: ["Playfair Display", "serif"],
  bodyFontFamily: ["Open Sans", "Assistant", "sans-serif"],
  footerFontFamily: ["Open Sans", "Assistant", "sans-serif"],
  googleFonts: [{ name: "Assistant", styles: ["300", "400", "500", "600", "700", "800", "900"]}]
});

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
