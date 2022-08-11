import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          minWidth: "350px",
          borderRadius: "25px",
          backgroundColor: "#282828",
          boxShadow:
            "16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)",
          color: "#F4F4F4",
          margin: "0 0 32px 0",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: "25px",
          ":first-of-type": {
            borderTopLeftRadius: "25px",
            borderTopRightRadius: "25px",
          },
          ":last-of-type": {
            borderBottomLeftRadius: "25px",
            borderBottomRightRadius: "25px",
          },
          "&:first-of-type::before": {
            content: `""`,
            display: "block",
            width: "5px",
            height: "40px",
            position: "absolute",
            top: "50%",
            marginTop: "-20px",
            left: "15px",
            backgroundColor: "#A9A9A9",
            borderRadius: "3px",
          },
          "&::before": {
            width: "5px",
            height: "40px",
            position: "absolute",
            top: "50%",
            marginTop: "-20px",
            left: "15px",
            backgroundColor: "#A9A9A9",
            borderRadius: "3px",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: "79px",
          padding: "0px 33px",
          fontSize: "24px",
          fontWeight: "500",
          //"&.MuiAccordionSummary-root.Mui-expanded": {
          //  backgroundColor: "red",
          //},
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          "&.MuiFormControlLabel-root": {
            marginRight: "0px",
          },
          "&.MuiSwitch-root": {
            margin: "0px",
            backgroundColor: "#366EFF",
          },
          "&.MuiSwitch-root .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track":
            {
              backgroundColor: "#366EFF",
            },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#282828",
          width: "21px",
          height: "21px",
          backgroundColor: "#F4F4F4",
          borderRadius: "50%",
        },
      },
    },
  },
});
