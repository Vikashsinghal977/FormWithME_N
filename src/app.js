const express = require('express');
const path = require('path');
const app = express();
require("./db/conn");
const Register = require("./models/registers")

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public")

app.use(express.static(static_path));

app.set('view engine', 'ejs');
console.log(path.join(__dirname, '../views'))

// Set the views directory
app.set('views', path.join(__dirname, '../views'));

app.get('/', (req, res) => {
    res.render("index");
});

app.get("/registers", (req, res) =>{
    res.render("registers");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});