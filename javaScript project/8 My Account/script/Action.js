class Action {
  constructor(type, description, amount) {
    this.id = Math.floor(Math.random() * 1000);
    this.type = type;
    this.description = description;
    this.amount = parseFloat(amount);
  }
}

export default Action;
