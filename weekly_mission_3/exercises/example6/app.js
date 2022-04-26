//usando libreria express
const express = require('express');
//app de express
const app = express();
//Puerto
const port = 3000;


//path inicial, respondera a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/launchx', (req, res) => {
    res.send('Launch X Page');
});

app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer);
});

app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params);
});

app.listen(port, () => {
    console.log(`Running at port ${port}`)
});
