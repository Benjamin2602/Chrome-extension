

let leads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')

//to save the array in local storage
let leadsFromLocalStorage = JSON.parse(localStorage.getItem('Leads'))
console.log(leadsFromLocalStorage)

// if leadFromLocalStorage is truthy (it exists) then set the leads variable to that value
if(leadsFromLocalStorage){
    leads = leadsFromLocalStorage
    renderLead()
}

deleteBtn.addEventListener('dblclick', function(){
    //clearing the local storage
    localStorage.clear()
    //clearing the array
    leads = []
    //clearing the dom by rendering the empty array
    renderLead()
})

inputBtn.addEventListener('click', function() {
leads.push(inputEl.value)
//clearing the input field after adding the value to the array
inputEl.value = ""
//to save the item in local storage
localStorage.setItem('Leads', JSON.stringify(leads))
renderLead()

//to get the item from local storage
console.log(localStorage.getItem('Leads'))
})

function renderLead(){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        listItems += `
        <li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}