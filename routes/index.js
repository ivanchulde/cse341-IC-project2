const router = require("express").Router();

const employeeRoutes = require("./employees");
const accessLogRouters = require("./accessLogs");

router.use("/employees", employeeRoutes);
router.use("/accesslogs", accessLogRouters);

router.get("/", (req, res) => {
    res.send("RFID Access API");
});

module.exports = router;