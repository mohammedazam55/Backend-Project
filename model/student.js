const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: String,
        required: true
    },
    course: {
        type: String, required: true
    },
    branch: {
        type: String,
        required: true
    }
});
// export model
const Student = mongoose.model('studentinfo', StudentSchema);
module.exports = Student;