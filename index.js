

const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
let leads = []


inputBtn.addEventListener('click', function() {
leads.push(inputEl.value)
console.log(leads)
})