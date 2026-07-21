const router = require("express").Router();

const accessLogsController = require("../controllers/accessLogs");
const validateAccessLog = require("../middleware/validateAccessLog");
const validateObjectId = require("../middleware/validateObjectId");
const { isAuthenticated } = require("../middleware/authenticate");


// GET ALL ACCESS LOGS
// #swagger.tags = ['Access Logs']
// #swagger.description = 'Get all access logs'
router.get("/", accessLogsController.getAll);


// GET ACCESS LOG BY ID
// #swagger.tags = ['Access Logs']
// #swagger.description = 'Get a single access log by ID'
// #swagger.parameters['id'] = {
//   in: 'path',
//   description: 'Access Log ID',
//   required: true,
//   type: 'string'
// }
router.get("/:id", validateObjectId, accessLogsController.getSingle);


// CREATE ACCESS LOG
// #swagger.tags = ['Access Logs']
// #swagger.description = 'Create a new access log'
// #swagger.parameters['accessLog'] = {
//   in: 'body',
//   description: 'Access log information',
//   required: true,
//   schema: {
//      employeeId: "123456",
//      action: "Login",
//      timestamp: "2026-07-18T10:30:00",
//      ipAddress: "192.168.1.10"
//   }
// }
router.post(
    "/",isAuthenticated,
    validateAccessLog,
    accessLogsController.createLog
);


// UPDATE ACCESS LOG
// #swagger.tags = ['Access Logs']
// #swagger.description = 'Update an existing access log'
// #swagger.parameters['id'] = {
//   in: 'path',
//   description: 'Access Log ID',
//   required: true,
//   type: 'string'
// }
// #swagger.parameters['accessLog'] = {
//   in: 'body',
//   description: 'Updated access log information',
//   required: true,
//   schema: {
//      employeeId: "123456",
//      action: "Logout",
//      timestamp: "2026-07-18T12:00:00",
//      ipAddress: "192.168.1.10"
//   }
// }
router.put("/:id", isAuthenticated, validateObjectId, validateAccessLog, accessLogsController.updateLog
);


// DELETE ACCESS LOG
// #swagger.tags = ['Access Logs']
// #swagger.description = 'Delete an access log'
// #swagger.parameters['id'] = {
//   in: 'path',
//   description: 'Access Log ID',
//   required: true,
//   type: 'string'
// }
router.delete("/:id", isAuthenticated, validateObjectId, accessLogsController.deleteLog);


module.exports = router;