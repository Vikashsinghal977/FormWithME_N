const express = require('express');
const path = require('path');
const app = express();
require("./db/conn");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public")

app.use(express.static(static_path));

app.get('/', (req, res) => {
    res.send("This is boom chiki chiki boom");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});