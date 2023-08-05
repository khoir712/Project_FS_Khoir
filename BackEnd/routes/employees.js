const employeeRoute = require("express").Router();
const EmployeeController = require("../controllers/EmployeeController");

employeeRoute.get("/", EmployeeController.getEmployees);
employeeRoute.post("/create", EmployeeController.create);
employeeRoute.get("/details/:id", EmployeeController.getEmployeeById);
employeeRoute.delete("/delete/:id", EmployeeController.delete);
employeeRoute.put("/update/:id", EmployeeController.update);

module.exports = employeeRoute;
