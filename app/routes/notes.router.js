module.exports = app => {
    const notes = require("../controllers/notes.controller.js");
    var router = require("express").Router();

    // Create a new note
    router.post("/", notes.create);

    // Retrieve all notes
    router.get("/", notes.findAll);

    // Retrieve all notes with specified patientHCNumber
    router.get("/:patientHCNumber", notes.findByPatientHCNumber);

    // Retrieve all notes with specified doctorID
    router.get("/:doctorID", notes.findByDoctorID);

    // Retrieve a single note with id
    router.get("/:id", notes.findOne);

    // Update a note with id
    router.put("/:id", notes.update);

    // Delete a note with id
    router.delete("/:id", notes.delete);

    // Delete all notes
    router.delete("/", notes.deleteAll);

    app.use('/api/notes', router);
};