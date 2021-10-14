const express = require('express')
const mysql = require('mysql');
const app = express()

const config = {
    host:'db',
    user:'root',
    password:'root',
    database:'nodedb',
};

const conn = mysql.createConnection(config);


app.get('/', (req, res) => {
    const sql = `INSERT INTO people(name) values('Full Cycle Rocks!')`;
    console.log(conn.query(sql));

    res.send('<h1>Full Cycle Rocks!</h1>');
})

app.listen(3000, () => {
    console.log('Run in 3000')
});