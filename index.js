// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("Error:", error);
//   });


const getcontainer = document.getElementById("container");
const inputField = document.getElementById("inputField");
const addButton = document.getElementById("addButton");
const displayButton = document.getElementById("displayButton");
const removeButton = document.getElementById("removeButton");
//  = sessionStorage.getItem("inputValue");


addButton.addEventListener("click" , function() {
    const inputValue = inputField.value;
    sessionStorage.setItem("inputValue", inputValue);
    // getcontainer.innerHTML = `<p>${inputValue}</p>`;
})

displayButton.addEventListener("click", displayValue);
removeButton.addEventListener("click", removeValue);
function displayValue() {
    console.log(inputField.value);
    const storedValue = sessionStorage.getItem("inputValue");
    getcontainer.innerHTML = `<p>${storedValue}</p>`;
}

function removeValue() {
    const removevalue = sessionStorage.removeItem("inputValue");
    getcontainer.innerHTML = "";
}