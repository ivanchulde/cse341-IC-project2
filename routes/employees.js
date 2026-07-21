const router = require("express").Router();

const employeeController = require("../controllers/employees");
const validateEmployee = require("../middleware/validateEmployee");
const validateObjectId = require("../middleware/validateObjectId");
const { isAuthenticated } = require("../middleware/authenticate.js");

/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: Employee management endpoints
 */

// GET ALL EMPLOYEES
// #swagger.tags = ['Employees']
// #swagger.description = 'Get all employees'
router.get("/", employeeController.getAll);


// GET EMPLOYEE BY ID
// #swagger.tags = ['Employees']
// #swagger.description = 'Get a single employee by ID'
// #swagger.parameters['id'] = {
//   in: 'path',
//   description: 'Employee ID',
//   required: true,
//   type: 'string'
// }
router.get("/:id", validateObjectId, employeeController.getSingle);


// CREATE EMPLOYEE
// #swagger.tags = ['Employees']
// #swagger.description = 'Create a new employee'
// #swagger.parameters['employee'] = {
//   in: 'body',
//   description: 'Employee information',
//   required: true,
//   schema: {
//      firstName: "John",
//      lastName: "Doe",
//      email: "john@example.com",
//      position: "Developer"
//   }
// }
router.post("/", isAuthenticated ,validateEmployee, employeeController.createEmployee);


// UPDATE EMPLOYEE
// #swagger.tags = ['Employees']
// #swagger.description = 'Update an existing employee'
// #swagger.parameters['id'] = {
//   in: 'path',
//   description: 'Employee ID',
//   required: true,
//   type: 'string'
// }
// #swagger.parameters['employee'] = {
//   in: 'body',
//   description: 'Updated employee information',
//   required: true,
//   schema: {
//      firstName: "John",
//      lastName: "Smith",
//      email: "johnsmith@example.com",
//      position: "Manager"
//   }
// }
router.put("/:id", isAuthenticated, validateObjectId, validateEmployee, employeeController.updateEmployee);


// DELETE EMPLOYEE
// #swagger.tags = ['Employees']
// #swagger.description = 'Delete an employee'
// #swagger.parameters['id'] = {
//   in: 'path',
//   description: 'Employee ID',
//   required: true,
//   type: 'string'
// }
router.delete("/:id", isAuthenticated, validateObjectId, employeeController.deleteEmployee);


module.exports = router;