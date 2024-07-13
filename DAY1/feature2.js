//create a script that demonstrate the difference in behavior betweeen let and const when it comes to reassignment.

// Using let for reassignment
let x = 10;
console.log("Initial value of x (using let):", x);

x = 20; // Reassigning a new value to x
console.log("After reassignment, value of x (using let):", x);

// Using const for reassignment
const y = 5;
console.log("Initial value of y (using const):", y);

// Attempting to reassign const will throw an error
try {
  y = 8; // Trying to reassign const will throw an error
  console.log("After reassignment, value of y (using const):", y); // This line won't execute due to the error
} catch (error) {
  console.error("Error occurred:", error.message);
}
