const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { getTickets, createTicket, getUsers } = require('./helpdesk');

app.use(bodyParser.json());

app.get('/tickets', async (req, res) => {
    const tickets = await getTickets();
    res.json(tickets);
});

app.post('/tickets', async (req, res) => {
    const { description } = req.body;
    const newTicket = await createTicket(description);
    res.json(newTicket);
});

app.get('/users', async (req, res) => {
    const users = await getUsers();
    res.json(users);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
