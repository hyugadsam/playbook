//usando libreria express
const express = require('express');
//app de express
const app = express();
app.use(express.json());
//Puerto
const port = 3000;

app.get('/v1/explorers', (req, resp) => {
    console.log(`Api explorers get all request ${new Date()}`)
    const explorers = [
        {id: 1, name: "Sam 1"},
        {id: 2, name: "Sam 2"},
        {id: 3, name: "Sam 3"},
        {id: 4, name: "Sam 4"},
        {id: 5, name: "Sam 5"},
        {id: 6, name: "Sam 6"},
    ];
    resp.status(200).json(explorers);
});

app.get('/v1/explorers/:id', (req, resp) => {
    console.log(`Api explorers get by id request ${new Date()}`)
    console.log(`Get explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Sam 1"};
    resp.status(200).json(explorer);
});

app.post('/v1/explorers/', (req, resp) => {
    console.log(`Api explorers post request ${new Date()}`)
    const requestBody = req.body;
    resp.status(200).json( {mesage: "Created!"} );
});

app.put('/v1/explorers/:id', (req, resp) => {
    console.log(`Api explorers put request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body;
    resp.status(200).json( {mesage: "Updated!"} );
});

app.delete('/v1/explorers/:id', (req, resp) => {
    console.log(`Api explorers delete request ${new Date()}`)
    console.log(`delete explorer with id ${req.params.id}`)
    const requestBody = req.body;
    resp.status(200).json( {mesage: "Deleted!"} );
});



app.listen(port, () => {
    console.log(`Running at port ${port}`)
});
