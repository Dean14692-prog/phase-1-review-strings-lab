// Write your code in this file!
const currentUser = "Grace Hopper";

// Welcome message using template literals
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Excited welcome message (uppercase)
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Short greeting using only the first letter of currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

// Output results for verification
console.log(welcomeMessage);
console.log(excitedWelcomeMessage);
console.log(shortGreeting);
