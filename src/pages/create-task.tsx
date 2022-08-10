import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "react-query";

import styles from "../styles/Home.module.css";
import { TaskService, ITask } from "../app/services/task.service";

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
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Create task</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Enter id"
                value={data.id}
                onChange={(e) =>
                  setData({
                    ...data,
                    id: +e.target.value,
                  })
                }
              />
              <input
                placeholder="Enter date"
                value={data.date}
                onChange={(e) =>
                  setData({
                    ...data,
                    date: e.target.value,
                  })
                }
              />

              <button disabled={isLoading}>Create</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateTask;
