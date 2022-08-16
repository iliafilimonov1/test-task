/* Separate task */
export interface ITask {
  reminder: Reminder[];
  id: number;
  date: string;
}

/* Need to do in each one of task */
export interface Reminder {
  title: string;
  description: string;
  isEnded: boolean;
}
