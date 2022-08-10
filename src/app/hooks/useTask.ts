import { useQuery } from "react-query";
import { TaskService, ITask } from "../services/task.service";

export const useTask = (id?: string) => {
  const { isLoading, data: task } = useQuery(
    ["task list", id],
    () => TaskService.getById(id || ""),
    {
      onError: (error: any) => {
        alert(error.message);
      },
      select: ({ data }): ITask => data,
      enabled: !!id,
    }
  );

  return { isLoading, task };
};
