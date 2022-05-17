module.exports = app => {
    const notes = require("../controllers/notes.controller.js");
    var router = require("express").Router();

    // Create a new note
    router.post("/", notes.create);

    // Retrieve all notes
    router.get("/", notes.findAll);

    // Retrieve all notes with specified patientHCNumber
    // Jacob - I'm not sure what should follow this "/"
    router.get("/:patientHCNumber", notes.findByPatientHCNumber);

    // Retrieve all notes with specified doctorID
    // Jacob - I'm not sure what should follow this "/"
    router.get("/:doctorID", notes.findByDoctorID);

    // Retrieve a single Tutorial with id
    router.get("/:id", notes.findOne);

    // Update a Tutorial with id
    router.put("/:id", notes.update);

    // Delete a Tutorial with id
    router.delete("/:id", notes.delete);

    // Create a new Tutorial
    router.delete("/", notes.deleteAll);

    app.use('/api/notes', router);
};