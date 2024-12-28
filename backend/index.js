const express = require('express');
const types = require('./types');

const app = express();

app.use(express.json());

app.post('/todo', function(req, response){
    const createPayload = req.body;
    const parsePayload = types.createTodo.safeParse(createPayload)
    if (!parsePayload.success) {
        response.status(401).json(
            {
            msg: "You entered the wrong Inputs"
            }
        )
        return;
    }
})

app.get('/todos', function(req, response){
    
})

app.put('/completed', function(req, response){
    const updatePayload = req.body;
    const parseUpdatePayload = types.Updatetodo.safeParse(updatePayload)
    if (!updatePayload.success) {
        response.status(401).json(
            {
                msg: "You entered the wrong ID"
            }
        )
    }
})