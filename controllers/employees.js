const mongodb = require("../database/connect");
const ObjectId = require("mongodb").ObjectId;

// GET all employees
const getAll = async (req, res) => {
    try {
        const db = mongodb.getDb();

        const result = await db.collection("employees").find();

        const employees = await result.toArray();

        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// GET employee by id
const getSingle = async (req, res) => {
    try {
        const employeeId = new ObjectId(req.params.id);

        const db = mongodb.getDb();

        const employee = await db.collection("employees").findOne({
            _id: employeeId
        });

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.status(200).json(employee);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// POST create employee
const createEmployee = async (req, res) => {
    try {
        const employee = {
            employeeId: req.body.employeeId,
            rfidTag: req.body.rfidTag,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            department: req.body.department,
            position: req.body.position,
            email: req.body.email,
            phone: req.body.phone,
            status: req.body.status,
            hireDate: req.body.hireDate
        };

        const db = mongodb.getDb();

        const response = await db.collection("employees").insertOne(employee);

        res.status(201).json({
            message: "Employee created",
            id: response.insertedId
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// PUT update employee
const updateEmployee = async (req, res) => {
    try {
        const employeeId = new ObjectId(req.params.id);

        const employee = {
            employeeId: req.body.employeeId,
            rfidTag: req.body.rfidTag,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            department: req.body.department,
            position: req.body.position,
            email: req.body.email,
            phone: req.body.phone,
            status: req.body.status,
            hireDate: req.body.hireDate
        };

        const db = mongodb.getDb();

        const response = await db.collection("employees").replaceOne(
            { _id: employeeId },
            employee
        );

        if (response.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({
                message: "Employee not found"
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// DELETE employee
const deleteEmployee = async (req, res) => {
    try {
        const employeeId = new ObjectId(req.params.id);

        const db = mongodb.getDb();

        const response = await db.collection("employees").deleteOne({
            _id: employeeId
        });

        if (response.deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({
                message: "Employee not found"
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getAll,
    getSingle,
    createEmployee,
    updateEmployee,
    deleteEmployee
};