import { Utils } from "../utils.js";
export var Status;
(function (Status) {
    Status["Uncompleted"] = "Uncompleted";
    Status["Completed"] = "Completed";
})(Status || (Status = {}));
export class Task {
    title;
    status = Status.Uncompleted;
    timeStamp = Utils.stringCurrentTime();
    timeStampId = Utils.dateString();
    constructor(title, status) {
        this.title = title;
        if (status) {
            this.status = status;
        }
    }
}
