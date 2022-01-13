let leads = [];
let saveButton = document.getElementById("save-button");
let saveTabButton = document.getElementById("save-tab");
let deleteAllButton = document.getElementById("delete-all");
let input = document.getElementById("input-el");
let leadsDocument = document.getElementById("leads");

saveButton.addEventListener("click", saveInput);
saveTabButton.addEventListener("click", saveTab);
deleteAllButton.addEventListener("click", deleteAll);
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    saveInput();
  }
});

function saveInput() {
  addNewLead(input.value);
}

function saveTab() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    console.log(tabs);
    addNewLead(tabs[0].url);
  });
}

function deleteAll() {
  leads = [];
  while (leadsDocument.firstChild) {
    leadsDocument.removeChild(leadsDocument.firstChild);
  }
}
function addNewLead(lead) {
  leads.push(lead);
  let aElement = `<li><a href='${lead}'>${lead}</li>`;
  leadsDocument.innerHTML += aElement;
  input.value = "";
}
