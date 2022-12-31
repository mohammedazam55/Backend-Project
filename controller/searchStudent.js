module.exports = (req, res) => {
    student = []
    res.render('search', { stuData: student, view: false });
}
