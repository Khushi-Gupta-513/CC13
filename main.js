// Reference the customer tickets element from the HTML file
const customerTickets = document.getElementById('customerTickets');
const errorMessage = document.getElementById('errorMessage'); // Element to display error messages, if needed

// Asynchronous function to fetch data from the Unresolved Tickets API
async function unresolvedTickets(ticketId) {
    // Show loading indicator (if applicable)
    const loadingMessage = document.createElement('li');
    loadingMessage.textContent = "Loading ticket data...";
    customerTickets.appendChild(loadingMessage);

    try {
        // Requesting data from the API
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ticketId}`);
        if (!res.ok) {
            throw new Error('Unable to retrieve customer data');
        }

        // Displaying Ticket Details on the Web Page
        const ticket = await res.json();
        console.log('Ticket:', ticket);

        // Create a list item to display the ticket details
        const listItem = document.createElement('li');
        listItem.textContent = `Ticket ID: ${ticket.id}, Customer Name: User ${ticket.userId}, Issue Description: ${ticket.title}, Details: ${ticket.body}`;
        customerTickets.appendChild(listItem);
    } catch (error) {
        // Handle any errors and display them on the page
        console.error('Error:', error.message);
        const errorItem = document.createElement('li');
        errorItem.textContent = `Error: ${error.message}`;
        customerTickets.appendChild(errorItem);
        // Optionally, show a more generic error message to the user
        errorMessage.textContent = "There was an issue retrieving the ticket data.";
    } finally {
        // Cleanup: Remove the loading message once done
        if (loadingMessage) {
            customerTickets.removeChild(loadingMessage);
        }
    }
}

// Fetch and display tickets for various customer IDs
unresolvedTickets(1);
unresolvedTickets(14);
unresolvedTickets(59);
unresolvedTickets(34);
unresolvedTickets(89);
unresolvedTickets(100);

// Check if there are no unresolved tickets
if (customerTickets.children.length === 0) {
    throw new Error("No unresolved tickets available.");
}

