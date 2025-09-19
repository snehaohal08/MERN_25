// const fs = require('fs')
// fs.writeFile('example1.txt', 'This is an example file created using Node.js fs module.', (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//     return;
//   }
//   console.log("File written successfully!");
// });

// fs.readFile('example1.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File content:", data);
// });

// Node.js (v18+ has fetch built-in)

console.log("1️⃣ Start");

// Fetch API (returns a Promise)
fetch("http://localhost:3000")
  .then((response) => response.json()) // Response ko JSON me convert karna
  .then((data) => {
    console.log("📄 Data received:", data);
  })
  .catch((error) => {
    console.log("❌ Error:", error);
  });

console.log("2️⃣ End");
