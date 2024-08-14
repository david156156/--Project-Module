import Action from "./script/Action.js";
import ActionsManager from "./script/ActionsManager.js";

let actionsManager = new ActionsManager();
ViewList();
console.log(actionsManager.actions);

window.addNewAction = function addNewAction() {
  let type = document.getElementById("selectType").value;
  let description = document.getElementById("inputDescription").value;
  let amount = document.getElementById("inputAmount").value;

  if (description !== "" && amount !== "") {
    actionsManager.addAction(new Action(type, description, amount));
    localStorage.setItem("myAccount", JSON.stringify(actionsManager.actions));
  }
  console.log(actionsManager.actions);
  ViewList();
};

function ViewList() {
  actionsManager.actions = JSON.parse(localStorage.getItem("myAccount"));
  document.getElementById("inputDescription").value = "";
  document.getElementById("inputAmount").value = "";
  document.getElementById("newTr").innerHTML = "";

  for (const action of actionsManager.actions) {
    if (action.type == "Income") {
      document.getElementById("newTr").innerHTML += `<tr>
                  <th scope="row">${action.description}</th>
                  <td class="text-success">${action.amount}</td>
                  <td>
                    <i onclick="updateAction(${action.id},${action.amount})" class="fa-regular fa-pen-to-square text-success"></i>
                  </td>
                  <td><i onclick="deleteAction(${action.id})" class="fa-solid fa-trash-can text-danger"></i></td>
                </tr>`;
    } else {
      document.getElementById("newTr").innerHTML += `<tr>
    <th scope="row">${action.description}</th>
    <td class="text-danger">-${action.amount}</td>
    <td>
      <i onclick="updateAction(${action.id},${action.amount})" class="fa-regular fa-pen-to-square text-success"></i>
    </td>
    <td><i onclick="deleteAction(${action.id})" class="fa-solid fa-trash-can text-danger"></i></td>
  </tr>`;
    }
  }

  let balance = actionsManager.calcBalance();
  document.getElementById("balance").innerText = balance;
}

window.updateAction = function updateAction(id, Amount) {
  let newAmount = prompt("plis", Amount);
  if (newAmount) {
    actionsManager.updateAction(id, newAmount);
    localStorage.setItem("myAccount", JSON.stringify(actionsManager.actions));
    ViewList();
  }
};

window.deleteAction = function deleteAction(id) {
  actionsManager.deleteAction(id);
  localStorage.setItem("myAccount", JSON.stringify(actionsManager.actions));
  ViewList();
};
