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


// -------------------------------------------------------------------------------------------------------------------    


    // (Task 3) - Highlighting High Priority Tickets
    
    if (priorityLevel === 'High') {
        ticket.classList.add('high-priority')
    }
    // Creating a Resolve button

    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.setAttribute('class', 'resolve-button');



    // -------------------------------------------------------------------------------------------------------------------   



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


// -------------------------------------------------------------------------------------------------------------------   


// (Task 5) - Inline Editing of Support Tickets

// Creating an edit button to change the current information displayed and let the user input their own information.

const editbutton = document.createElement('button');
editbutton.textContent = 'Edit';
editbutton.setAttribute('class', 'edit-btn');

ticket.appendChild(editbutton)

editbutton.addEventListener('click', function(event) {
    event.stopPropagation();

    const currentName = customerHeading.textContent;
    const currentIssue = issuePara.textContent.replace('Issue: ', '');
    const currentPriority = priorityLabel.textContent.replace('Priority: ', '');

    const nameinput = document.createElement('input');
    nameinput.value = currentName;

    const issueinput = document.createElement('input');
    issueinput.value = currentIssue;

    const priorityinput = document.createElement('input')
    priorityinput.value = currentPriority;

    const savebutton = document.createElement('button');
    savebutton.textContent = 'Save';

    customerHeading.innerHTML = '';
    issuePara.innerHTML = '';
    priorityLabel.innerHTML = '';

    customerHeading.appendChild(nameinput);
    issuePara.appendChild(issueinput);
    priorityLabel.appendChild(priorityinput);
    ticket.appendChild(savebutton);

    savebutton.addEventListener('click', function() {
        customerHeading.textContent = nameinput.value
        issuePara.textContent = `Issue: ${issueinput.value}`;
        priorityLabel.textContent = `Priority: ${priorityinput.value}`;

        savebutton.remove();
    })
})
}


// -------------------------------------------------------------------------------------------------------------------



// (Task 2) - Testing out the function by inputting a name, concern, and priority level

createSupportTicket('Alice Johnson', 'Locked out of account', 'High');
createSupportTicket('Ryan Mapp', 'Resetting password', 'High');
createSupportTicket('John Smith', 'Requesting refund for product', 'Low');


// -------------------------------------------------------------------------------------------------------------------



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

// Creating a setTimeout method to make the priority tickets change appearance due to priority

setTimeout(highlightHighPriorityTickets, 0);