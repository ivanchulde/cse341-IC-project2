const router = require("express").Router();

const employeeRoutes = require("./employees");
const accessLogRouters = require("./accessLogs");

router.use("/employees", employeeRoutes);
router.use("/accesslogs", accessLogRouters);

router.get("/", (req, res) => {
    res.status(200).json({
        title: "RFID Employee Access Management API",
        description: "RESTful API for managing employees and RFID access logs.",
        course: "CSE341 - Web Services",
        version: "1.0.0",
        documentation: "/api-docs"
    });
});

module.exports = router;