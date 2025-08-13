const fs = require('fs')
fs.writeFile('example1.txt', 'This is an example file created using Node.js fs module.', (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully!");
});

fs.readFile('example1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
