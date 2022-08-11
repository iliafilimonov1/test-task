import type { NextPage } from "next";
import { useTasks } from "../app/hooks/useTasks";
import styles from "../styles/Home.module.css";
import { Accordion, ThemeProvider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IOSSwitch, theme } from "../styles/Styles";
import { IconButton } from "@mui/material";
import { Settings } from "@mui/icons-material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useEffect, useState } from "react";
import { ITask } from "../app/services/task.service";

const Home: NextPage = () => {
  const { isLoading, tasks: localTasks } = useTasks();

  const [locTask, setTask] = useState<ITask[] | undefined>();

  useEffect(() => {
    if (localTasks?.length) {
      setTask(localTasks);
    }
  }, [localTasks]);

  /* change switch of reminders */
  const changeSwitchHandler = (taskId: number, switchIndex: number) => {
    const newTasks = locTask?.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          reminder: task.reminder.map((reminder, index) => {
            if (switchIndex === index) {
              return {
                ...reminder,
                isEnded: !reminder.isEnded,
              };
            }
            return reminder;
          }),
        };
      }
      return task;
    });

    setTask(newTasks);
  };

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
        ) : locTask?.length ? (
          <div className={styles.grid} style={{ marginBottom: 30 }}>
            {locTask.map((task) => {
              const { reminder: subtasks } = task;
              return (
                <div key={String(task.id)}>
                  <ThemeProvider theme={theme}>
                    <Accordion className={styles.accordion} key={task.id}>
                      <AccordionSummary
                        className={"MuiAccordionSummary-root.Mui-expanded"}
                        expandIcon={<ExpandMoreIcon />}
                      >
                        {task.date}
                      </AccordionSummary>
                      <AccordionDetails>
                        {subtasks.map((el, index) => {
                          return (
                            <div key={el.title} className={styles.wrapper}>
                              <div>
                                <h2
                                  className={
                                    el.isEnded ? styles.ended : undefined
                                  }
                                >
                                  {el.title}
                                </h2>
                                <p>{el.description}</p>
                              </div>
                              <div>
                                <FormControlLabel
                                  key={String(index)}
                                  control={
                                    <IOSSwitch
                                      checked={el.isEnded}
                                      onChange={() =>
                                        changeSwitchHandler(task.id, index)
                                      }
                                    />
                                  }
                                  label=""
                                />
                              </div>
                            </div>
                          );
                        })}
                      </AccordionDetails>
                    </Accordion>
                  </ThemeProvider>
                </div>
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
