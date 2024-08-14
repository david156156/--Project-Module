class Task {
    constructor(description) {
        this.id = Math.floor(Math.random() * 1000);
        this.description = description;
        this.completed = false;
    }
    get(prop) {
        return this[prop];
    }
    set(prop, newValue) {
        this[prop] = newValue;
    }
}

export default Task;

