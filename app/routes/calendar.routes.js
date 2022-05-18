module.exports = app => {
    const calendar = require("../controllers/calendar.controller.js");
    var router = require("express").Router();
    router.post("/", calendar.create);
    router.get("/", calendar.findAll);
    app.use('/api/calendar', router);
 };
 