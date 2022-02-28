//To import express library
const express = require("express");

//Import data.js
const database = require("./data");

//define a router object
let router = express.Router();

// define an API to return all the users
router.get("/users/all", (request, response) => {
    let users = database.get_all_users();
    response.send(users);
});

//define an API to get user by user id
router.get("/users/by-uid", (request, response) => {
    let users = database.get_user_by_user_id(request.query.user_id);
    response.send(users);
});

// define a POST API to add a new user to database. User's information is passed in the request's body.
// This is a temporary post -you can see the new added users w /users/all as long as the server is running
// The info is stored in a temporary file on your RAM and will reset once server is stopped (MySQL for database permanence)
router.post("/users/add",(request, response) => {
    //fetch user details from request.body
    let user = request.body;
    //add user to database
    database.add_user(user);
    //send the success message
    response.send("User added!");
});

// define a GET API with path "/home"
router.get("/home", (request, response) => {
    response.send("Welcome to Dev Toolkit 2!");

});

//define another GET API with path "/sum"
router.get("/sum", (request, response) => {
    let sum = request.query.a + request.query.b; // in my API request query section will contain params a & b
    response.send("Sum is: " + sum);
});

//define a POST API with path "/sum" (Different API even though path is the same)
//To run this POST API use POSTMAN (ss on OneNote)
router.post("/sum",(request, response) => {
    let sum = request.body.a + request.body.b;
    response.send("Sum is: " + sum);
})

module.exports = {router}; //To export router to the main.js file