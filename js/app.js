document.addEventListener('DOMContentLoaded', () => {
    const newShoppingItemForm = document.querySelector('#shopping-list-form');
    newShoppingItemForm.addEventListener('submit', handleNewShoppingItemFormSubmit);

    const deleteListButton = document.querySelector('#delete-list');
    deleteListButton.addEventListener('click', handleDeleteListClick)
})

const handleNewShoppingItemFormSubmit = function(event) {
    event.preventDefault();

    const shoppingListItem = createShoppingListItem(event.target);
    const shoppingList = document.querySelector('#shopping-list');
    shoppingList.appendChild(shoppingListItem);

    event.target.reset();
}

const createShoppingListItem = function(form) {
    const shoppingListItem = document.createElement('li');
    shoppingListItem.classList.add(form.department.value.replace(/\s+/g, '-'));

    const shoppingItem = document.createElement('h3');
    shoppingItem.textContent = form.shoppingItem.value;
    shoppingListItem.appendChild(shoppingItem);

    const quantity = document.createElement('h4');
    quantity.textContent = `Qty: ${form.quantity.value}`;
    shoppingListItem.appendChild(quantity);

    const department = document.createElement('h4');
    department.textContent = form.department.value;
    shoppingListItem.appendChild(department);

    if (form.notes.value.length > 0) {
        const notes = document.createElement('p');
        notes.textContent = `Notes: ${form.notes.value}`;
        shoppingListItem.appendChild(notes);  
    }
    
    return shoppingListItem;
}

const handleDeleteListClick = function() {
    const shoppingList = document.querySelector('#shopping-list');
    shoppingList.innerHTML = '';
}
