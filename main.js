// Reference the customer tickets element from the HTML file
const customerTickets = document.getElementById('customerTickets');

// Asynchronous function to fetch data from the Unresolved Tickets API
async function unresolvedTickets(ticketId) {
    try {
        // Requesting data from the API
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ticketId}`);
        if (!res.ok) {
            throw new Error('Unable to retrieve customer data');
        }

        // Processing will occur in the next commit
        // const ticket = await res.json();
    } catch (error) {
        console.error('Error:', error.message);
    }
}

