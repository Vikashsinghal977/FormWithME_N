const express = require('express');
const path = require('path');
const app = express();
require("./db/conn");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public")

app.use(express.static(static_path));

app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, '../views'));

app.get('/', (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});