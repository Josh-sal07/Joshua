document.getElementById("info-form").addEventListener("submit", function(event) {
    event.preventDefault();

    
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let hobbies = document.getElementById("hobbies").value.split(',').map(hobby => hobby.trim()); 
    let isStudent = document.getElementById("student").checked; 

    
    let summaryItem = document.createElement('div');
    summaryItem.classList.add('summary-item');

    
    let summaryContent = `
        <p>
            Name: ${name} <br>
            Age: ${age} <br>
            Hobbies: ${hobbies.join(', ')} <br>
            Student: ${isStudent ? 'Yes' : 'No'}
        </p>
    `;

    
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        
        document.getElementById("name").value = name;
        document.getElementById("age").value = age;
        document.getElementById("hobbies").value = hobbies.join(', ');
        document.getElementById("student").checked = isStudent;

        
        summaryItem.remove();
    };

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        
        summaryItem.remove();
    };

    
    summaryItem.innerHTML = summaryContent;
    summaryItem.appendChild(editButton);
    summaryItem.appendChild(deleteButton);

    
    document.getElementById('Summary').appendChild(summaryItem);

    
    document.getElementById("info-form").reset();
});
