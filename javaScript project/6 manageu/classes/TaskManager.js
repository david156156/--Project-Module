import Task from "./Task.js";

class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(description) {
        this.tasks.push(new Task(description));
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id != id);
    }
    updateTaskDescription(id, newDescription) {
        let task = this.tasks.findIndex((task) => task.id == id);
        this.tasks[task].description = newDescription;
    }
    completeTask(id) {
        let task = this.tasks.findIndex((task) => task.id == id);
        this.tasks[task].completed = true;
    }
}

export default TaskManager;