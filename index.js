

const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
let leads = []
const ulEl = document.getElementById('ul-el')


inputBtn.addEventListener('click', function() {
leads.push(inputEl.value)
//clearing the input field after adding the value to the array
inputEl.value = ""
renderLead()
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