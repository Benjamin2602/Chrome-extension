# Chrome-extension

//currently learning about local storage
//local storage is a way to store data in the browser and it will stay there even if you refresh the page

//to save the item in local storage
localStorage.setItem('myLeads', 'www.examplelead.com')

//to get the item from local storage
localStorage.getItem('myLeads') 

//to check the item in the console
console.log(localStorage.getItem('myLeads'))

//to remove the item from local storage
localStorage.clear()


//to save the array in local storage

let myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)

// 2. Push a new value to the array
myLeads.push("www.ben.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)



