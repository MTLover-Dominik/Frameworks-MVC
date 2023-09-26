const homepageView = (req, res) => {
    res.render("homepage", { currentPage: '/homepage'});
};

module.exports = {
    homepageView
}