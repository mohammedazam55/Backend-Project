const Student = require('../model/student.js')
module.exports = (req, res) => {
    // console.log(req.body.rollno);
    // var test=Student.find({id: req.body.rollno});
    Student.find({ id: req.body.rollno }, (error, student) => {
        if (error) {
            console.log(student)
            res.render('search', { stuData: student });
        }
        else {

            console.log(student)
            res.render('search', { stuData: student, view: true });
        }

    })
}
