
const input = document.getElementById('item-input');
const form = document.getElementById('item-form');
const list = document.getElementById('item-list'); // ul
const addButton = document.getElementsByClassName("add-button")
const feedback = document.querySelector(".feedback")

addEventListener("submit", (event) => {
    event.preventDefault()
    const textInput = input.value
    createItem(textInput)
    // console.log(textInput);
})


list.addEventListener('click', (event) => {
    const buttonRemove = event.target.closest(".remove-button")

    if (buttonRemove) {
        const listItem = buttonRemove.closest(".list-item")
        if (listItem) {
            listItem.remove()

            feedback.classList.add("activate")
            
            feedback.addEventListener('click', (event) => {
            const buttonClose = event.target.closest(".feedback-close")
            if (buttonClose) {
                 feedback.classList.remove('activate')
            } 

            setTimeout(() => {
                feedback.classList.remove("activate")
            }, 3000)
            })
        }
    }
})

list.addEventListener('change', (event) => {
    const checkboxButton = event.target.closest(".checkbox")
    
    if (checkboxButton) {
        const listItem = checkboxButton.closest('.list-item')
        const textItem = listItem.querySelector(".item-name") 
    
        if (checkboxButton.checked) {
            textItem.classList.add("completed")
        } else {
            textItem.classList.remove('completed')
        }
    }
})

function createItem(text) {
	const newItem = document.createElement('li');
	const label = document.createElement('label');
	const checkbox = document.createElement('input');
	const itemName = document.createElement('span');
	const removeButton = document.createElement('button');

itemName.textContent = text   
newItem.append(label)
list.append(newItem)
checkbox.type = "checkbox"
checkbox.className = "checkbox"
label.append(checkbox)
label.append(itemName)
itemName.classList.add("item-name")
newItem.classList.add("list-item")
label.classList.add("item-label")
removeButton.classList.add("remove-button")
removeButton.setAttribute("aria-label", "Remover Pão de forma");
removeButton.setAttribute("title", "Remover item")
removeButton.textContent =  "🗑"
newItem.append(removeButton)
}




