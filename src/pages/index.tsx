import type { NextPage } from "next";
import { useTasks } from "../app/hooks/useTasks";
import styles from "../styles/Home.module.css";
import { Accordion, ThemeProvider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { theme } from "../styles/Styles";
import { IconButton } from "@mui/material";
import { Settings } from "@mui/icons-material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const IOSSwitch = styled((props: SwitchProps) => (
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

const Home: NextPage = () => {
  const { isLoading, tasks } = useTasks();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.flex_container}>
          <h1 className={styles.title}>To Do</h1>
          <IconButton>
            <Settings sx={{ fontSize: 30, color: "#f4f4f4" }} />
          </IconButton>
        </div>

        {isLoading ? (
          <div>Loading...</div>
        ) : tasks?.length ? (
          <div className={styles.grid}>
            {tasks.map((task) => {
              const { reminder: subtasks } = task;
              return (
                <>
                  <ThemeProvider theme={theme}>
                    <Accordion className={styles.accordion} key={task.id}>
                      <AccordionSummary
                        className={"MuiAccordionSummary-root.Mui-expanded"}
                        expandIcon={<ExpandMoreIcon />}
                      >
                        {task.date}
                      </AccordionSummary>
                      <AccordionDetails>
                        {subtasks.map((el) => {
                          return (
                            <>
                              <div className={styles.wrapper}>
                                <div>
                                  <h2 key={el.title}>{el.title}</h2>
                                  <p key={el.description}>{el.description}</p>
                                </div>
                                <div>
                                  <FormControlLabel
                                    key={el.isEnded}
                                    control={
                                      <IOSSwitch defaultChecked={el.isEnded} />
                                    }
                                    label=""
                                  />
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </AccordionDetails>
                    </Accordion>
                  </ThemeProvider>
                </>
              );
            })}
          </div>
        ) : (
          <div>Elements not found</div>
        )}
      </main>
    </div>
  );
};

export default Home;
