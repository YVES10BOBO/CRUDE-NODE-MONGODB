// // index.js

// const userForm = document.getElementById('userForm');
// const userList = document.getElementById('userList');

// const API_URL = 'http://localhost:4000/api/users';

// // Function to fetch and display users
// async function fetchUsers() {
//     try {
//         const response = await fetch(API_URL);
//         const users = await response.json();
//         userList.innerHTML = ''; // Clear existing list

//         users.forEach(user => {
//             const tr = document.createElement('tr');
//             tr.innerHTML = `
//                 <td>${user.name}</td>
//                 <td>${user.age}</td>
//                 <td>${user.address}</td>
//                 <td>
//                     <button class="delete-btn" data-id="${user._id}">Delete</button>
//                     <button class="update-btn" data-id="${user._id}">Update</button>
//                 </td>
//             `;
//             userList.appendChild(tr);
//         });
//     } catch (error) {
//         console.error('Error fetching users:', error);
//     }
// }

// // Event listener for form submission
// userForm.addEventListener('submit', async function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const age = parseInt(document.getElementById('age').value);
//     const address = document.getElementById('address').value;

//     try {
//         const response = await fetch(API_URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ name, age, address })
//         });

//         if (!response.ok) {
//             throw new Error('Failed to add user');
//         }

//         // Fetch users again to update the list
//         fetchUsers();

//         // Reset the form
//         userForm.reset();
//     } catch (error) {
//         console.error('Error adding user:', error);
//     }
// });

// // Initial fetch of users when the page loads
// fetchUsers();
