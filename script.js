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

function showTask() {
  let getLocalStorge = localStorage.getItem("to do");
  arr = JSON.parse(getLocalStorge);
  let pendingNumber = document.querySelector(".pendingNumber");
  pendingNumber.textContent = arr.length;
  let styleList = "";
  arr.forEach((element, index) => {
    styleList += `<li>
                  <p>${element}</p>
                  <span>
                    <button class="button-edit" onclick="editItem(${index})"><img src="./icon/edit-svgrepo-com.svg"></img></button>
                    <button class="button-delete" onclick="deleteItem(${index})"><img src="./icon/delete.svg"></img></button>
                  </span>
                </li>`;
  });

  listToDo.innerHTML = styleList;
  inputValue.value = "";
}

function deleteItem(index) {
  let getLocalStorge = localStorage.getItem("to do");
  arr = JSON.parse(getLocalStorge);
  arr.splice(index, 1);
  localStorage.setItem("to do", JSON.stringify(arr));
  showTask();
}

deleteAll.addEventListener("click", deleteAllItem);

function deleteAllItem() {
  arr = [];
  localStorage.setItem("to do", JSON.stringify(arr));
  showTask();
}
