/* Separate task */
export interface ITask {
  reminder: Reminder[];
  id: string;
  date: number;
}

/* Need to do in each one of task */
export interface Reminder {
  title: string;
  description: string;
  isEnded: boolean;
}
