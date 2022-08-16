import { useQuery } from "react-query";
import { TaskService, ITask } from "../services/task.service";

export const useTasks = () => {
  const { isLoading, data: tasks } = useQuery(
    "country list",
    () => TaskService.getAll(),
    {
      onError: (error: any) => {
        alert(error.message);
      },
      select: ({ data }): ITask[] =>
        data.map((task) => ({
          ...task,
          date: task.date,
        })),
    }
  );

  return { isLoading, tasks };
};
