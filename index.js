

const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
let leads = []
const ulEl = document.getElementById('ul-el')


inputBtn.addEventListener('click', function() {
leads.push(inputEl.value)
renderLead()
})

function renderLead(){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        listItems += "<li>" + leads[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}