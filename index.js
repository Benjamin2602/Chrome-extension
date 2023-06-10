let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

//to save the array in local storage
// let leadsFromLocalStorage = JSON.parse(localStorage.getItem('Leads'))
// console.log(leadsFromLocalStorage)

// if leadFromLocalStorage is truthy (it exists) then set the leads variable to that value
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLead(myLeads);
}

function renderLead(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
        </li>`;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  //clearing the local storage
  localStorage.clear();
  //clearing the array
  myLeads = [];
  //clearing the dom by rendering the empty array
  renderLead(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  //clearing the input field after adding the value to the array
  inputEl.value = "";
  //to save the item in local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", function(){
    // Save the url instead of logging it out
    // console.log(tabs[0].url)
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})
