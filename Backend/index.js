const express = require('express');
const cors = require('cors'); 
const user = require("./index.json");
const app = express();
const PORT = 8000;

app.use(cors());

app.get("/user", (req, res) => {
    return res.json(user);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
