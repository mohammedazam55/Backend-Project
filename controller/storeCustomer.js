const Student = require("../model/student.js");
const path = require("path");
module.exports = (req, res) => {
    console.log(req.body);

    Student.create(req.body, (error, student) => {
        if (error) {
            console.log(error);
            data = "Can Not Insert Student Details Please Try Agin";
            res.render("register", { status: data });
        } else {
            data = "Student Details Inserted Successfully";
            res.render("register", { status: data });
        }
    });
};
