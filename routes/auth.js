const router = require("express").Router();
const passport = require("passport");

// Login con Google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Callback después del login
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/login-success",
    failureRedirect: "/auth/login-failed",
  })
);

// Login exitoso
router.get("/login-success", (req, res) => {
  res.json({
    message: "Login successful!",
    user: req.user,
  });
});

// Login fallido
router.get("/login-failed", (req, res) => {
  res.status(401).json({
    message: "Login failed."
  });
});

// Logout
router.get("/logout", (req, res, next) => {
  req.logout(function(err) {
    if (err) return next(err);

    req.session.destroy(() => {
      res.json({
        message: "Logged out successfully."
      });
    });
  });
});

module.exports = router;