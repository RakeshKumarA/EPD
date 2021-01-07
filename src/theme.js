import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "-apple-system", "sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
  },
  palette: {
    background: {
      default: "#F5F6F8",
    },
    primary: {
      main: "#109CF1",
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "3.5rem",
        fontWeight: 500,
        lineHeight: 1.5,
      },
      h2: {
        fontSize: "1.5rem",
        fontWeight: 500,
        lineHeight: 1.5,
      },
      h3: {
        fontSize: "1.25rem",
        fontWeight: 500,
        lineHeight: 1.5,
      },
      h5: {
        fontSize: "0.8125rem",
        fontWeight: 500,
        lineHeight: 1.5,
      },
      h6: {
        fontSize: "0.75rem",
        fontWeight: 500,
        lineHeight: 1.5,
      },
    },
    MuiButton: {
      label: {
        color: "#fff",
      },
    },
  },
});

export default theme;
