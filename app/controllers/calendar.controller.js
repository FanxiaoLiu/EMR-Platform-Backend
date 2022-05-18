const db = require("../models");
const Calendar = db.calendar;

exports.create = async (req, res) => {
    // Validate request
    if (!req.body.appointmentTitle) {
       res.status(400).send({ message: "Content can not be empty!" });
       return;
    }
    // Create a Tutorial
    const cal = new Calendar({
        appointmentTitle: req.body.appointmentTitle,
        dateTime: req.body.dateTime,
        patientHCNumber: req.body.patientHCNumber,
        appointmentdesc: req.body.appointmentdesc,
        notes: req.body.notes
    });
    // Save Tutorial in the database
    try {
       const data = await cal.save(cal);
       res.send(data);
    } catch (e) {
       res.status(500).send({
          message:
             e.message || "Some error occurred while creating the calendar item."
       });
    }
 };

 exports.findAll = (req, res) => {
    const title = req.query.appointmentTitle;
    var condition = title ? { appointmentTitle: { $regex: new RegExp(title), $options: "i" } } : {};
    Calendar.find(condition)
       .then(data => {
          res.send(data);
       })
       .catch(err => {
          res.status(500).send({
             message:
                err.message || "Some error occurred while retrieving tutorials."
          });
       });
 };