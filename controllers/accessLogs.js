const mongodb = require("../database/connect");
const ObjectId = require("mongodb").ObjectId;

// GET all
const getAll = async (req, res) => {
    try {
        const db = mongodb.getDb();

        const result = await db.collection("accessLogs").find();
        const logs = await result.toArray();

        res.status(200).json(logs);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET by id
const getSingle = async (req, res) => {
    try {

        const logId = new ObjectId(req.params.id);

        const db = mongodb.getDb();

        const log = await db.collection("accessLogs").findOne({
            _id: logId
        });

        if (!log) {
            return res.status(404).json({
                message: "Access log not found."
            });
        }

        res.status(200).json(log);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST
const createLog = async (req, res) => {

    try {

        const db = mongodb.getDb();

        const log = {
            employeeId: req.body.employeeId,
            rfidTag: req.body.rfidTag,
            employeeName: req.body.employeeName,
            accessDate: req.body.accessDate,
            entryTime: req.body.entryTime,
            exitTime: req.body.exitTime,
            accessPoint: req.body.accessPoint,
            accessType: req.body.accessType,
            result: req.body.result
        };

        const response = await db.collection("accessLogs").insertOne(log);

        res.status(201).json(response);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// PUT
const updateLog = async (req, res) => {

    try {

        const logId = new ObjectId(req.params.id);

        const db = mongodb.getDb();

        const log = {
            employeeId: req.body.employeeId,
            rfidTag: req.body.rfidTag,
            employeeName: req.body.employeeName,
            accessDate: req.body.accessDate,
            entryTime: req.body.entryTime,
            exitTime: req.body.exitTime,
            accessPoint: req.body.accessPoint,
            accessType: req.body.accessType,
            result: req.body.result
        };

        const response = await db.collection("accessLogs").replaceOne(
            { _id: logId },
            log
        );

        if (response.modifiedCount > 0) {
            res.sendStatus(204);
        } else {
            res.status(404).json({
                message: "Access log not found."
            });
        }

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// DELETE
const deleteLog = async (req, res) => {

    try {

        const logId = new ObjectId(req.params.id);

        const db = mongodb.getDb();

        const response = await db.collection("accessLogs").deleteOne({
            _id: logId
        });

        if (response.deletedCount > 0) {
            res.sendStatus(204);
        } else {
            res.status(404).json({
                message: "Access log not found."
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
    createLog,
    updateLog,
    deleteLog
};