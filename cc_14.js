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

    if (priorityLevel === 'High') {
        ticket.classList.add('high-priority')
    }

    // (Task 3) - Highlighting High Priority Tickets
    
    if (priorityLevel === 'High') {
        ticket.classList.add('high-priority')
    }
    // Creating a Resolve button

    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.setAttribute('class', 'resolve-button');

    // (Task 4) - Adding an event listener to remove the ticket when the "Resolve" button is clicked and add stopPropagation to prevent bubbling.
    resolveButton.addEventListener('click', function(event) {
        event.stopPropagation();
        ticket.remove();
    });

    ticket.appendChild(resolveButton);

    // (Task 4) - Creating a ticket container and having it console-logged when a ticket has been clicked.

    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.appendChild(ticket);
    ticketContainer.addEventListener('click', function() {
        console.log('A ticket was clicked.')
    })
}

// (Task 3) - Highlighting High Priority Tickets

// Creating a function that highlights any tickets that have High Priority associated with it

function highlightHighPriorityTickets() {
    const highPriorityTickets = document.querySelectorAll('.high-priority')

    const ticketArray = Array.from(highPriorityTickets);

    ticketArray.forEach(function(ticket) {
        ticket.style.backgroundColor = '#f8d7da';
        ticket.style.border = '2px solid red';
        ticket.style.border = '10px';
        ticket.style.marginBottom = '10px';
    })
}


// (Task 2) - Testing out the function by inputting a name, concern, and priority level

createSupportTicket('Alice Johnson', 'Locked out of account', 'High');
createSupportTicket('Ryan Mapp', 'Resetting password', 'High');
createSupportTicket('John Smith', 'Requesting refund for product', 'Low');

// (Task 3) - Creating a setTimeout method to make the priority tickets change appearance due to priority

setTimeout(highlightHighPriorityTickets, 0);