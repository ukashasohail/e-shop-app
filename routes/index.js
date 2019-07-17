const express = require("express");
const router = express.Router();
const mysql = require('mysql');

// creating connection with DB 
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

// router.use("/deleteItem",(req,res)=>{
//     console.log("working delete request")
//     res.send("delete request")
// })
router.use("/deleteItem",(req,res)=>{
    console.log("delete.............");

    let form_data = req.body;

    let to_delete = form_data["delId"];
    console.log(to_delete); 

    console.log(form_data);

    let sql = ('DELETE FROM Products WHERE id =' + to_delete.toString());

    let query = db.query(sql, (err, result)=>{
        if(err){
            throw err;
        }
        console.log(result);
        console.log("deleted data");
    });

});

router.use("/insert",(req,res)=>{
    console.log("working on  cart request");

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


router.use("/insertItem",(req,res)=>{
    console.log("working on insert item request");

    let form_data = req.body;
    console.log(form_data);

    let sql = 'INSERT INTO Products SET ?'

    let query = db.query(sql, form_data, (err, result)=>{
        if(err){
            throw err;
        }
        console.log(result);
        console.log("inserted Item data");
    });

});

router.use("/updateitem",(req,res)=>{
    console.log("working on update item request...");

    let form_data = req.body;

    let copy_of_form_data = {...form_data};
    
    delete copy_of_form_data.itemId;

    console.log(form_data);
    console.log(copy_of_form_data);

    let sql = 'UPDATE Products SET ? where id = ' + form_data["itemId"];

    let query = db.query(sql, copy_of_form_data, (err, result)=>{
        if(err){
            throw err;
        }
        console.log(result);
        console.log("updated data");
    });

});

router.use("/deleteItem",(req,res)=>{
    console.log("delete.............");

    let form_data = req.body;

    let to_delete = form_data["delId"];
    console.log(to_delete); 

    console.log(form_data);

    let sql = ('DELETE FROM Products WHERE id =' + to_delete.toString());

    let query = db.query(sql, (err, result)=>{
        if(err){
            throw err;
        }
        console.log(result);
        console.log("deleted data");
    });
    router.use("/updateitem",(req,res)=>{
    console.log("working on update item request");

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

});

module.exports = router