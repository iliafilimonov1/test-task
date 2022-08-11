import { createTheme, styled, Switch, SwitchProps } from "@mui/material";

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
          "&.MuiAccordion-root.Mui-expanded:last-of-type": {
            marginBottom: "24px",
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

export const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#10C200",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#366EFF" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
