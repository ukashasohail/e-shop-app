const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

var twilio = require('twilio');

var accountSid = 'AC1fdcf1184d7b017a0aa98f6b79b65562'; 
var authToken = '36ff0d6d5889e8966ae08f9d12f0cc08'; 

var client = new twilio(accountSid, authToken);



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

//Deleting Item
router.use("/deleteItem", (req, res) => {
    console.log("delete.............");

    let form_data = req.body;

    let to_delete = form_data["delId"];
    console.log(to_delete);

    console.log(form_data);

    let sql = ('DELETE FROM Product WHERE id =' + to_delete.toString());

    let query = db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        console.log("deleted data");
    });

});

let last_customer_id = 27;
let cart_id = 2;

//cart
router.use("/cart", (req, res) => {
    console.log("cart.......");

    let cart_array = req.body;

    let cart_array1 = cart_array["carts"];



    console.log(cart_array1);


    let sql_customer = 'SELECT * FROM Customers ORDER BY CustomerID DESC LIMIT 1';

    let query = db.query(sql_customer, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
        console.log(result);
    });


    for (let i = 0; i < cart_array1.length; i++) {
        let item = cart_array1[i];
        console.log(item);

        let product_id = item["id"];
        let customer_id = last_customer_id;

        let data = [{
            cart_id: cart_id,
            product_id: product_id,
            customer_id: customer_id
        }];

        let sql_cart = 'INSERT INTO Cart SET ?';

        let query_cart = db.query(sql_cart, data, (err1, result1) => {
            if (err1) {
                throw err1;
            }
            console.log(result1);
        });

    };


    last_customer_id = last_customer_id + 1;
    cart_id = cart_id + 1;
});




//insert into customers
router.use("/insert", (req, res) => {
    console.log("working on  cart request");

    let form_data = req.body;
    // console.log(form_data);

    let copy_of_form_data = {
        ...form_data
    };

    delete copy_of_form_data.cart;

    console.log(copy_of_form_data);

    let sql2 = 'INSERT INTO Customers SET ?'

    let query2 = db.query(sql2, copy_of_form_data, (err2, result2) => {
        if (err2) {
            throw err2;
        }
        // console.log(result);
        console.log("inserted data of customer");

        const msg = {
            to: 'ukasha484@yahoo.com',
            from: 'ukasha@eshop.com',
            subject: 'You have got and order',
            html: '<strong>You have got the following order</strong>',
        };

        const msg_for_client = {
            to: 'ukasha484@yahoo.com',
            from: 'ukasha@eshop.com',
            subject: 'Order confirmed',
            html: '<strong>Your order has been confirmed. </strong>',
        };

        msg_for_client["to"] = form_data["email"];

        sgMail.send(msg).then(() => {
            console.log("email sent");
        }).catch((error) => {
            console.log('error', error);
        });

        sgMail.send(msg_for_client).then(() => {
            console.log("email sent to customer");
        }).catch((error) => {
            console.log('error', error);
        });

        client.messages.create({
            body: 'You have recieved an order',
            to: '+923132668258', 
            from: '+17632805751' 
        })
        .then((message) => console.log(message.sid));
        
    });

});


//Inserting Item
router.use("/insertItem", (req, res) => {
    console.log("working on insert item request");

    let form_data = req.body;
    console.log(form_data);

    let sql = 'INSERT INTO Product SET ?'

    let query = db.query(sql, form_data, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        console.log("inserted Item data");
    });

});


//Updating Item
router.use("/updateitem", (req, res) => {
    console.log("working on update item request...");

    let form_data = req.body;

    let copy_of_form_data = {
        ...form_data
    };

    delete copy_of_form_data.itemId;

    console.log(form_data);
    console.log(copy_of_form_data);

    let sql = 'UPDATE Product SET ? where id = ' + form_data["itemId"];

    let query = db.query(sql, copy_of_form_data, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        console.log("updated data");
    });

});


module.exports = router