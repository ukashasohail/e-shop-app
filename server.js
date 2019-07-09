
const express = require("express");
const mysql = require('mysql');

const bodyParser = require("body-parser");
const index = require("./Routes/index");

const app = express();

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
    console.log("database connected");
});

app.get('/getdata', (req, res) => {

    let sql = 'SELECT * FROM Products';

    let query = db.query(sql, (err, result)=>{
        if (err){
            throw err;
        }
        console.log(result);
        res.send(result);
    });
    // axios.get("/getdata",(req,res)=>{
    //     console.log("getdata",res.data)
    // })
    // .then(res=> {
    //     console.log("then res",res.data)
    // })
    // .then(res=> {
    //     console.log("then res",res)
    // })
});


//BodyParser
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())


app.get("/", (req,res) => res.send("hello"));

app.use("/",index)

// app.post("/testtt",(req,res) => {
//     res.json({
//         server : "data from server"
//     })
//     console.log("res",res)
// })

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server running on port ${port}`))