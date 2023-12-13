import { createTheme } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

export const DarkTheme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#1F2024",
      light: "rgb(75, 76, 79)",
      dark: "rgb(21, 22, 25)",
      contrastText: "#ffffff",
    },

    secondary: {
      light: "#57F4BB",
      main: "#2EF2AA",
      dark: "#20A976",
      contrastText: "#000000",
    },

    background: {
      paper: "#1A1B1F",
      default: "#333333",
    },

    error: {
      light: "#E57373",
      main: "#F44336",
      dark: "#D32F2F",
      contrastText: "#ffffff",
    },

    warning: {
      light: "#FFB74D",
      main: "#FFA726",
      dark: "#F57C00",
      contrastText: "#000000",
    },

    info: {
      light: "#4FC3F7",
      main: "#ffffff",
      dark: "#0288D1",
      contrastText: "#000000",
    },

    success: {
      light: "#81C784",
      main: "#66BB6A",
      dark: "#388E3C",
      contrastText: "#000000",
    },

    text: {
      primary: "#ffffff",
      secondary: "#2EF2AA",
      disabled: "#2EF2AA",
    },

    divider: "rgba(255,255,255,0.08)",
  },
});
