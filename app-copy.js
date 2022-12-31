// esversion:6
const express = require("express");
const html = require("ejs");
const path = require("path");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

let app = express();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1/student", function (error) {
    if (error) {
        console.log(error);
    }
    console.log("connection successful");
});
const searchStudentController = require("./controller/searchStudent");
const fetchController = require("./controller/searchdb");
app.get("/search", searchStudentController);
app.post("/student/fetch", fetchController);
app.listen(3000, () => {
    console.log("App listening on port 3000!");
});
