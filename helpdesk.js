const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senha',
    database: 'helpdesk'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
    }
    console.log('Conectado ao banco de dados como id ' + connection.threadId);
});

const getTickets = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM tickets', (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

const createTicket = (description) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO tickets (description) VALUES (?)';
        connection.query(query, [description], (err, result) => {
            if (err) reject(err);
            resolve({ id: result.insertId, description });
        });
    });
};

const getUsers = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users', (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

module.exports = { getTickets, createTicket, getUsers };
