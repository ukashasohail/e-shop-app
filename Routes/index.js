const express = require("express");
const router = express.Router();

const mysql = require('mysql');
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
    console.log("Database connected from index.js");
});


router.use("/test",(req,res) => 
    res.json({
    msg : "user works"
})) 

router.use("/fetchData",(req,res)=> {
    res.json({
        fortest : "dumy data"
    })
})
router.use("/insert",(req,res)=>{
    console.log("working on insert request");

    let form_data = req.body;
    console.log(form_data);

    let sql = 'INSERT INTO Customers SET ?'

    let query = db.query(sql, form_data, (err, result)=>{
        if(err){
            throw err;
        }
        console.log(result);
        console.log("inserted data");
    });

});


router.use("/insertItem",(req,res)=>{
    console.log("working on insert item request");

    let form_data = req.body;
    console.log(form_data);

    // let sql = 'INSERT INTO Customers SET ?'

    // let query = db.query(sql, form_data, (err, result)=>{
    //     if(err){
    //         throw err;
    //     }
    //     console.log(result);
    //     console.log("inserted data");
    // });

});

module.exports = router