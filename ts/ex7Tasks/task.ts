import { Utils } from "../utils.js";

export enum Status {
  Uncompleted = "Uncompleted",
  Completed = "Completed",
}

export class Task {
  title: string;
  status: Status = Status.Uncompleted;
  timeStamp = Utils.stringCurrentTime();
  timeStampId = Utils.dateString();
  constructor(title: string, status?: Status) {
    this.title = title;
    if(status){
      this.status = status;
    }
  }
} 