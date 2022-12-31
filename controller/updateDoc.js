const Student = require("../model/student.js");
module.exports = (req, res) => {
    var test = {};
    if (req.body.name) {
        test.name = req.body.name;
    }
    if (req.body.id) {
        test.id = req.body.id;
    }
    if (req.body.course) {
        test.course = req.body.course;
    }
    if (req.body.branch) {
        test.branch = req.body.branch;
    }
    // console.log(test);
    Student.updateOne(
        { name: req.body.cname },
        { $set: test },
        (error, student) => {
            if (error) {
                console.log(student);
                data = "Can Not Update Student Details Please Try Agin";
                res.render("update", { status: data });
            } else {
                data = "Student Details Updated Successfully";
                res.render("update", { status: data });
            }
        }
    );
};
//{cname: req.body.cnamenew, email: req.body.email, phone: req.body.phone, city: req.body.city }
