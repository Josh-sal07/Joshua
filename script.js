document.getElementById("info-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from form
    let name = document.getElementById("item-name").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;

    // Create a new summary item
    let summaryItem = document.createElement('div');
    summaryItem.classList.add('summary-item');

    // Create summary content
    let summaryContent = `
        <p>
             ${name} 
             -₱${price}.00 
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

        // Remove the summary item
        summaryItem.remove();
    };

    // Create and set up the delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        summaryItem.remove();
    };

    // Append the summary content and buttons to the summary item
    summaryItem.innerHTML = summaryContent;
    summaryItem.appendChild(editButton);
    summaryItem.appendChild(deleteButton);

    // Append the summary item to the summary container
    document.getElementById('Summary').appendChild(summaryItem);

    // Reset the form
    document.getElementById("info-form").reset();
});
