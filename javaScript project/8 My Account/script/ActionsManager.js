import Action from "./Action.js";

class ActionsManager {
  constructor() {
    this.actions = [];
    this.balance = 0;
  }
  addAction(action) {
    this.actions.push(action);
    this.calcBalance();
  }
  deleteAction(id) {
    this.actions = this.actions.filter((action) => action.id !== id);
    this.calcBalance();
  }
  updateAction(id, newAmount) {
    let insex = this.actions.findIndex((action) => action.id == id);
    this.actions[insex].amount = parseFloat(newAmount);
    this.calcBalance();
  }
  calcBalance() {
    this.balance = this.actions.reduce(
      (total, action) =>
        action.type == "Income" ? total + action.amount : total - action.amount,
      0
    );
    return this.balance;
  }
}

export default ActionsManager;
