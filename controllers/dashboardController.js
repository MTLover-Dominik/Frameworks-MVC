//For Register Page
const dashboardView = (req, res) => {
    res.render("dashboard", {
        user: req.user,
        currentPage: '/dashboard'
    });
};
module.exports = {
    dashboardView,
};