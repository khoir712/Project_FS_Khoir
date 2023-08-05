const { employee } = require("../models");

class EmployeeController {
  static getEmployees(req, res) {
    employee
      .findAll()
      .then((employee) => {
        res.send(employee);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static create(req, res) {
    const { nameEmployee, position, department, address, phone, role } =
      req.body;
    employee
      .create({
        nameEmployee,
        position,
        department,
        address,
        phone,
        role,
      })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getEmployeeById(req, res) {
    const id = +req.params.id;
    console.log(req.params);
    employee
      .findByPk(id)
      .then((result) => {
        result
          ? res.send(result)
          : res.send({
              message: `employee id ${id} not found.`,
            });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static delete(req, res) {
    const id = Number(req.params.id);
    employee
      .destroy({
        where: { id },
      })
      .then((result) => {
        result === 1
          ? res.send({
              message: `employee id ${id} has been deleted.`,
            })
          : res.send({
              message: `employee has not been deleted.`,
            });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static update(req, res) {
    const id = Number(req.params.id);
    const { nameEmployee, position, department, address, phone, role } =
      req.body;
    employee
      .update(
        {
          nameEmployee,
          position,
          department,
          address,
          phone,
          role,
        },
        {
          where: { id },
        }
      )
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = EmployeeController;
