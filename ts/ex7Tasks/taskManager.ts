import { Task } from "./task.js";

export class TaskManager {
  tasks: Array<Task> = [];

  add(task: Task) {
    this.tasks.push(task);
  }

  delete(timeStampId: string) {
    let index = this.tasks.findIndex((t) => t.timeStampId === timeStampId);
    this.tasks.splice(index, 1);
  }

  edit(task: Task) {
    let index = this.tasks.findIndex((t) => t.timeStampId === task.timeStampId);
    this.tasks.splice(index, 1, task);
  }
}

export const taskManag = new TaskManager();