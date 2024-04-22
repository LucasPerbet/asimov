const logoutController = {
    logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                console.error(err);
            }
            res.redirect('/login');
        });
    }
};

module.exports = logoutController;
