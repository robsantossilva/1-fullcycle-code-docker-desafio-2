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


app.get('/', async (req, res) => {

    const sql = `INSERT INTO people(name) values('Full Cycle Rocks!')`;
    conn.query(sql, (err, result) => {
        if(err){
            res.json(err);
        }else{

            const sqlSelect = `SELECT * FROM people WHERE id = ?`;
            conn.query(sqlSelect, result.insertId, (err, result) => {
                if(err){
                    res.json(err);
                }else{
                    res.json(result);
                }
            });
        }
    });
})

app.listen(3000, () => {
    console.log('Run in 3000')
});