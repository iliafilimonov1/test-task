import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "react-query";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { TaskService, ITask } from "../app/services/task.service";
import styles from "../styles/Home.module.css";

const CreateTask: NextPage = () => {
  const [data, setData] = useState<ITask>({
    id: 8,
    date: "",
  } as ITask);

  const { push } = useRouter();

  const { isLoading, mutateAsync } = useMutation(
    "create task",
    (data: ITask) => TaskService.create(data),
    {
      onSuccess: () => {
        push("/");
      },
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await mutateAsync(data);
  };

  return (
    <main className={styles.create}>
      <h1 className={styles.create_title}>Create task</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.task_wrapper}>
          <TextField
            sx={{ marginBottom: "24px" }}
            variant="outlined"
            label="Task id"
            placeholder="Please enter id"
            value={data.id}
            onChange={(e) =>
              setData({
                ...data,
                id: +e.target.value,
              })
            }
          />

          <TextField
            sx={{ marginBottom: "24px" }}
            variant="outlined"
            type="date"
            placeholder="Please enter date"
            value={data.date}
            onChange={(e) =>
              setData({
                ...data,
                date: e.target.value,
              })
            }
          />

          <Button variant="contained" disabled={isLoading}>
            Create task
          </Button>
        </div>
      </form>
    </main>
  );
};

export default CreateTask;
