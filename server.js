const express = require("express");
const mysql = require('mysql');
const bodyParser = require("body-parser");
const index = require("./Routes/index");

const app = express();

const port = process.env.PORT || 5000;

//BodyParser
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


// creating connection with db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dbms123',
    database: 'mydb'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Database Connected from server.js");
});

// handling request on home route
app.get("/", (req,res) =>{
    res.send("Hello from server");
});

app.use("/",index);

//handling /getdata request
app.get('/getdata', (req, res) => {

    let sql = 'SELECT * FROM Products';

    let query = db.query(sql, (err, result)=>{
        if (err){
            throw err;
        }
        // console.log(result);
        res.send(result);
    });
});


app.listen(port,() =>{
 console.log(`Server running on port ${port}`);
});