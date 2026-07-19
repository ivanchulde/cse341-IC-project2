const validateAccessLog = (req, res, next) => {
    const {
        employeeId,
        rfidTag,
        employeeName,
        accessDate,
        entryTime,
        exitTime,
        accessPoint,
        accessType,
        result
    } = req.body;

    if (
        !employeeId ||
        !rfidTag ||
        !employeeName ||
        !accessDate ||
        !entryTime ||
        !exitTime ||
        !accessPoint ||
        !accessType ||
        !result
    ) {
        return res.status(400).json({
            message: "All fields are required."
        });
    }

    next();
};

module.exports = validateAccessLog;