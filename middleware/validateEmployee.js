const validateEmployee = (req, res, next) => {
    const {
        employeeId,
        rfidTag,
        firstName,
        lastName,
        department,
        position,
        email,
        status
    } = req.body;

    if (
        !employeeId ||
        !rfidTag ||
        !firstName ||
        !lastName ||
        !department ||
        !position ||
        !email ||
        !status
    ) {
        return res.status(400).json({
            message: "All required employee fields must be provided."
        });
    }

    next();
};

module.exports = validateEmployee;