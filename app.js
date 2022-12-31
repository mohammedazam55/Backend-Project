// module imports
const express = require("express");
const html = require("ejs");
const path = require("path");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const searchStudentController = require("./controller/searchStudent");
const fetchController = require("./controller/searchdb");
const addStudent = require("./controller/newCustomer");
const storeStudent = require("./controller/storeCustomer");
const updateStudent = require("./controller/updateCustomer");
const updateDocs = require("./controller/updateDoc");

const app = express();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");
//mongodb://localhost:27017
// connecting mongodb using mongoose
mongoose.connect("mongodb://127.0.0.1:27017/student", function (error) {
    if (error) { console.log(error); }
    console.log("connection successful");
});

// assigning routes
app.get("/", searchStudentController);
app.post("/student/fetch", fetchController);
app.get("/page/register", addStudent);
app.post('/customer/register', storeStudent);
app.get("/search", searchStudentController);
app.get("/page/update", updateStudent);
app.post("/customer/update", updateDocs);
app.listen(3000, () => console.log("App listening on port 3000!"));