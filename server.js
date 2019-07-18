const express = require("express");
const mysql = require('mysql');
const bodyParser = require("body-parser");
const index = require("./routes/index");


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

const app = express();

const port = process.env.PORT || 5000;

//BodyParser
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


// creating connection with db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
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
    res.send("Hello from zubair");
});

app.use("/",index);

//handling /getdata request
app.get('/getdata', (req, res) => {

    let sql = 'SELECT * FROM Product';

    let query = db.query(sql, (err, result)=>{
        if (err){
            throw err;
        }
        // console.log(result);
        res.send(result);
    });
});


app.get("/adminpath",(req,res)=>{
    console.log("working admin...");

    let sql = 'SELECT * FROM admin';

    let query = db.query(sql, (err, result)=>{
        if(err){
            throw err;
        }
        res.send(result);
        console.log(result);
        console.log("admin data");
    });

});


app.listen(port,() =>{
 console.log(`Server running on port ${port}`);
});