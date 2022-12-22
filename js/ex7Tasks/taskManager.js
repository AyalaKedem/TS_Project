export class TaskManager {
    tasks = [];
    add(task) {
        this.tasks.push(task);
    }
    delete(timeStampId) {
        let index = this.tasks.findIndex((t) => t.timeStampId === timeStampId);
        this.tasks.splice(index, 1);
    }
    edit(task) {
        let index = this.tasks.findIndex((t) => t.timeStampId === task.timeStampId);
        this.tasks.splice(index, 1, task);
    }
}
export const taskManag = new TaskManager();
