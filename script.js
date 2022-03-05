let inputValue = document.querySelector(".input input");
let btnAdd = document.querySelector(".add-icon");
let listToDo = document.querySelector(".list-row ul");
let deleteAll = document.querySelector(".footer button");

btnAdd.addEventListener("click", setValueLocalStorge);

showTask();
function setValueLocalStorge() {
  let userData = inputValue.value;
  let getLocalStorge = localStorage.getItem("to do");
  if (getLocalStorge == null) {
    arr = [];
  } else {
    arr = JSON.parse(getLocalStorge);
  }

  if (inputValue.value != "") {
    arr.push(userData);
    localStorage.setItem("to do", JSON.stringify(arr));
  }

  showTask();
}
