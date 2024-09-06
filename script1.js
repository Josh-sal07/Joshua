document.getElementById("info-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from form
    let name = document.getElementById("item-name").value;
    let price = parseFloat(document.getElementById("price").value);
    let quantity = parseInt(document.getElementById("quantity").value, 10);

    // Create a new summary item
    let summaryItem = document.createElement('div');
    summaryItem.classList.add('summary-item');

    // Create and add checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('item-checkbox');

    // Create summary content
    let summaryContent = `
        <p>
            ${name} 
            - ₱${price.toFixed(2)} 
            x ${quantity}
        </p>
    `;

    // Create and set up the edit button
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        // Populate the form with the current summary item data
        document.getElementById("item-name").value = name;
        document.getElementById("price").value = price;
        document.getElementById("quantity").value = quantity;

        // Remove the summary item and update total
        summaryItem.remove();
        updateTotalAmount();
    };

    // Create and set up the delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        // Remove the summary item and update total
        summaryItem.remove();
        updateTotalAmount();
    };

    // Create and set up the checkout button
    let checkoutButton = document.createElement('button');
    checkoutButton.textContent = 'Checkout';
    checkoutButton.onclick = function() {
        if (checkbox.checked) {
            alert(`Item: ${name} - ₱${price.toFixed(2)} x ${quantity} has been checked out.`);
            summaryItem.remove();
            updateTotalAmount();
        } else {
            alert('Please select the item to checkout.');
        }
    };

    // Append the checkbox, summary content, and buttons to the summary item
    summaryItem.appendChild(checkbox);
    summaryItem.innerHTML += summaryContent; 
    summaryItem.appendChild(editButton);
    summaryItem.appendChild(deleteButton);
    summaryItem.appendChild(checkoutButton);

    // Append the summary item to the summary container
    document.getElementById('Summary').appendChild(summaryItem);

    // Update total amount and reset the form
    updateTotalAmount();
    document.getElementById("info-form").reset();
});

// Handle the checkout button for the entire cart
document.getElementById("checkoutButton").addEventListener("click", function() {
    let items = document.querySelectorAll('.item-checkbox');
    let checkedItems = Array.from(items).filter(checkbox => checkbox.checked);
    
    if (checkedItems.length === 0) {
        alert('Pagklaro dra wakay gi checkout!.');
        return;
    }

    // For simplicity, let's just alert the user and clear the checked items
    checkedItems.forEach(checkbox => {
        let summaryItem = checkbox.parentElement;
        let name = summaryItem.querySelector('p').innerText.split(' - ')[0];
        alert(`Item: ${name} Na checkout na dzaii!!.`);
        summaryItem.remove();
    });

    // Update total amount after checkout
    updateTotalAmount();
});

// Function to update the total amount
function updateTotalAmount() {
    let items = document.querySelectorAll('.summary-item');
    let totalAmount = 0;

    items.forEach(item => {
        let price = parseFloat(item.querySelector('p').innerText.split(' - ')[1].split(' x ')[0].replace('₱', ''));
        let quantity = parseInt(item.querySelector('p').innerText.split(' x ')[1]);

        totalAmount += price * quantity;
    });

    document.getElementById('totalAmount').innerText = `Total: ₱${totalAmount.toFixed(2)}`;
}
