import axios from "axios";
import { ITask } from "../Types";

const API_URL = "http://localhost:3004";

axios.defaults.baseURL = API_URL;

export const TaskService = {
  async getAll() {
    return axios.get<ITask[]>("/tasks");
  },
  async getById(id: string) {
    return axios.get<ITask>(`/tasks/${id}`);
  },
  async create(data: ITask) {
    return axios.post("/tasks", data, {
      headers: { "Content-Type": "application/json" },
    });
  },
};
