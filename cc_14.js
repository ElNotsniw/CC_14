// Task 2 - Support Ticket Dynamic

// Creating a function that incoporates the customer's name, their concern, and how high their priority is.

function createSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticket = document.createElement('div');
    ticket.setAttribute('class', 'ticket');

    // Creating customer's name

    const customerHeading = document.createElement('h2');
    customerHeading.textContent = customerName;
    ticket.appendChild(customerHeading);

    // Creating customer's concern

    const issuePara = document.createElement('p');
    issuePara.textContent = issueDescription;
    ticket.appendChild(issuePara);

    // Creating priority label

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = priorityLevel
    ticket.appendChild(priorityLabel);
    
    // Creating a Resolve button

    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.setAttribute('class', 'resolve-button');

    resolveButton.addEventListener('click', function() {
        ticket.remove();
    })

    ticket.appendChild(resolveButton);

    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.appendChild(ticket);
}

// Testing out the function by inputting a name, concern, and priority level

createSupportTicket('Alice Johnson', 'Locked out of account', 'High');
createSupportTicket('John Smith', 'Requesting refund for product', 'Low');  