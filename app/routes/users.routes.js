module.exports = app => {
    const users = require("../controllers/users.controller.js");
    var router = require("express").Router();

    // Create a new user
    router.post("/", users.create);

    // Retrieve all users
    router.get("/", users.findAll);

    // Retrieve a single user with id
    router.get("/:id", users.findOne);

    // Update a user with id
    router.put("/:id", users.update);

    // Delete a user with id
    router.delete("/:id", users.delete);

    // Delete all users
    router.delete("/", users.deleteAll);

    // Retrieve all users with specified doctorID
    router.get("/:doctorID", users.findByDoctorID);

    // Retrieve all users with specified signinID
    router.get("/:signinID", users.findBySigninID);

    // Retrieve all users with specified password
    router.get("/:password", users.findByPassword);

    // Retrieve all users with specified doctorFirstName
    router.get("/:doctorFirstName", users.findByDoctorFirstName);

    // Retrieve all users with specified doctorLastName
    router.get("/:doctorLastName", users.findByDoctorLastName);    

    app.use('/api/users', router);
};