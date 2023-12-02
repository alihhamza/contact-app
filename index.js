// Check if contacts exist in localStorage
if (!localStorage.getItem('contacts')) {
    // If not, create dummy contacts
    const dummyContacts = [
      { id: 1, firstName: 'John', lastName: 'Doe', phone: '1234567890', email: 'johndoe@example.com' },
      { id: 2, firstName: 'Jane', lastName: 'Smith', phone: '9876543210', email: 'janesmith@example.com' },
      { id: 3, firstName: 'Tom', lastName: 'Brown', phone: '5551237890', email: 'tombrown@example.com' }
    ];

    // Store dummy contacts in localStorage as a string
    localStorage.setItem('contacts', JSON.stringify(dummyContacts));
}

// Function to display contacts on the webpage
function displayContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    // Get the div where contacts will be displayed
    const contactsListDiv = document.getElementById('contactsList');

    // Clear the previous content of the div
    contactsListDiv.innerHTML = '';

    if (contacts && contacts.length > 0) {
      // Create an unordered list to display contacts
      const ul = document.createElement('ul');

      // Iterate through contacts and create list items
      contacts.forEach(contact => {
        const li = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.textContent = `${contact.firstName} ${contact.lastName}`;
        anchor.setAttribute('href', `/contacts/view.html?id=${contact.id}`)
        li.appendChild(anchor);
        ul.appendChild(li);
      });

      // Append the list to the div
      contactsListDiv.appendChild(ul);
    } else {
      // Display a message if no contacts found
      contactsListDiv.textContent = 'No contacts available';
    }
}

// Function to view contact on the webpage
function viewContact(id, nameWrapper, phoneWrapper, emailWrapper) {
  if (localStorage.getItem('contacts')) {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    contacts.forEach(contact => {
      if (contact.id == id) {
        document.querySelector(nameWrapper).innerHTML = `${contact.firstName} ${contact.lastName}`;
        document.querySelector(phoneWrapper).innerHTML = contact.phone;
        document.querySelector(emailWrapper).innerHTML = contact.email;
      }
    });
  }
}