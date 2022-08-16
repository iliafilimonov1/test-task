import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "react-query";

import { TaskService } from "../app/services/task.service";
import { ITask, Reminder } from "../app/Types";
import styles from "../styles/Home.module.css";
import { generateId } from "../app/utils/helper";

const CreateTask: NextPage = () => {
  const [data, setData] = useState<ITask>({
    id: generateId(),
    date: Date.now(),
    reminder: [],
  } as ITask);

  const [reminder, setReminder] = useState<Reminder>();

  const { push } = useRouter();

  const addNewReminderHandler = () => {
    if (reminder?.title && reminder?.description) {
      setData({
        ...data,
        reminder: [...data.reminder, reminder],
      });
    }
    setReminder(undefined);
  };

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
          <input
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
          {data.reminder &&
            data.reminder.map((reminder) => (
              <div key={reminder.title}>
                <h4>{reminder.title}</h4>
                <h4>{reminder.description}</h4>
              </div>
            ))}
          <button
            onClick={(e) => {
              e.preventDefault();
              setReminder({ title: "", description: "", isEnded: false });
            }}
          >
            Add new reminder
          </button>
          {reminder && (
            <div>
              <input
                type="text"
                placeholder="Please enter title"
                value={reminder.title}
                onChange={(e) =>
                  setReminder({
                    ...reminder,
                    title: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Please enter description"
                value={reminder.description}
                onChange={(e) =>
                  setReminder({
                    ...reminder,
                    description: e.target.value,
                  })
                }
              />
              <button onClick={addNewReminderHandler}>Ok</button>
            </div>
          )}

          <button disabled={isLoading}>Create task</button>
        </div>
      </form>
    </main>
  );
};

export default CreateTask;
