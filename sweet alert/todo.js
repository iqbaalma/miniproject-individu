const input = document.getElementById("inputTitle");
const list = document.getElementById("inputList");
const submit = document.getElementById("submitTitle");
const tableList = document.getElementById("tableList");
const submitList = document.getElementById("submitList");

submit.addEventListener("click", () => {
  if (input.value === "") {
    window.alert("Data tidak boleh kosong!");
  } else {
    const listTitle = document.getElementById("listTitle");
    const titleValue = input.value;

    listTitle.innerText = `${titleValue}`;
  }
});

function addList() {
  const listValue = list.value;
  const newList = document.createElement("td");

  newList.innerText = listValue;
  tableList.append(newList);
  listValue = "";
}

tableList.addEventListener("click", (e) => {
  e.target.remove();
});